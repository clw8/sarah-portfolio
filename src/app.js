// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }

// ready(fn);



class spaOne{
	constructor(pageChangeCallback){
		this.appDiv = document.getElementById('app');
		this.navLinks = Array.prototype.slice.call(document.querySelectorAll('nav .nav-link'));
		this.htmlRegex = /^(.+)\.html$/;
		this.currentPage = "";
		this.pageCache = {};
		this.links ={};
		this.preloadViews = true;


		this.init = this.init.bind(this);
		this.getTemplate = this.getTemplate.bind(this);
		this.myAsyncFunction = this.myAsyncFunction.bind(this);
		this.applyDOMElements = this.applyDOMElements.bind(this);
		this.preloadOtherViews = this.preloadOtherViews.bind(this);
		this.preloadElements = this.preloadElements.bind(this);

		// The event below is fired when a page is loaded
		this.event = document.createEvent('Event');
	//	this.event = this.event.bind(this);
		this.event.initEvent('pagechange', true, true);
		// Listen for the event.
		if(!!pageChangeCallback){
			window.addEventListener('pagechange', pageChangeCallback, false);
		}

	}

	init(){
			//map the nav-links to an object which pairs the link itself with its href value. this will be useful for the popstate event
		for (let i = 0; i < this.navLinks.length ; i++){
			let linkHref = this.htmlRegex.exec(this.navLinks[i].getAttribute('href'))[1];
			this.links[linkHref] = this.navLinks[i];
		}
		//event listeners for each nav click, which fetches the html file and injects the corresponding app div into the current page
		for (let key in this.links){
			if(!this.links.hasOwnProperty(key)) continue;
			this.links[key].addEventListener('click', (e)=>{
				this.handleLinkClick(this.links[key], e);
			})
		}

		var appDivLinks = this.appDiv.querySelectorAll('.nav-link');
		appDivLinks.forEach((link)=>{
			link.addEventListener('click', (e)=>{
				this.handleLinkClick(link, e);
			})
		})

		//get initial page's href value and current html document for caching
		var initActiveNavLink = document.querySelector('.active');
		this.currentPage = this.htmlRegex.exec(initActiveNavLink.getAttribute('href'))[1];
		this.pageCache[this.currentPage] = document;

		//browser back button functionality
		window.addEventListener('popstate', (e)=>{
				this.getTemplate(e.state.page);})
		window.history.pushState({'page': this.currentPage + '.html'}, null, this.currentPage + '.html');

		//preload other views if turned on after 2 seconds
		setTimeout(()=>{
			if(this.preloadViews == true){
				this.preloadOtherViews();
			}
		}, 2000);
	}

	getTemplate(page){
		//if already loaded and cached, show page,
		if(this.pageCache.page){
			this.applyDOMElements(page, this.pageCache.page, this.appDiv);
		}
		//if not cached, make new http request
		else{
			//if there is an add-on domain, any http requests go to the root,
			//..not the add-on domain, so path issues need to be resolved with the pageURL variable
			let pageURL = page  + '.html'
			this.myAsyncFunction(page, pageURL, this.appDiv, this.applyDOMElements)
		}
	}

	myAsyncFunction(page, pageURL, loadlocation, callback) {
		const xhr = new XMLHttpRequest();
		xhr.onload = () => callback(page, xhr.response, loadlocation);
		xhr.onerror = () => callback(page, 'There was an error retrieving the document. Please try again', loadlocation);
		xhr.open("GET", pageURL, true);
		xhr.responseType = "document";
		xhr.setRequestHeader('Content-type', 'text/html');
		xhr.overrideMimeType("text/html");
		xhr.send();
	}


	applyDOMElements(page, response, loadlocation){
		console.log('loading ' + page);
		//error handling
		if(typeof response == 'string'){
			loadlocation.innerHTML = response;
		}
		else{
			//if not already cached, cache the response
			if(!this.pageCache[page]){
			this.pageCache[page] = response;
			}

			var	appDivResponse = response.getElementById('app');
			var images = Array.prototype.slice.call(appDivResponse.querySelectorAll('img'));
			var bgimages = Array.prototype.slice.call(appDivResponse.querySelectorAll('*[background-image-src]'));
			var scripts = Array.prototype.slice.call(response.querySelectorAll('.app-script'));

			//css animation for new view
			loadlocation.classList.add('view-enter');
			loadlocation.addEventListener('animationend', () => {
				loadlocation.classList.remove('view-enter');
			}, true);


			// fire event "pagechange"

			//reset current app view in preparation for new view: innerHTML, and scripts are reset
			loadlocation.innerHTML = "";
			
			var appendedScript = Array.prototype.slice.call(document.body.querySelectorAll('.app-script'));
			appendedScript.forEach(function (script){
					document.body.removeChild(script);
			})

			//load the new view's app div into the current html page
			loadlocation.innerHTML = appDivResponse.innerHTML;

			//for smoother transitions and image loading, images and backgroundimages (with "background-image-src" attribute) are given the class imgloaded
			images.forEach(function (img){
					img.onload = function(){
						img.classList.remove('hidden');
						img.classList.add('imgloaded');
					}
			})
			// bgimages.forEach(function (bgimg){
			// 	var bgimgsrc = bgimg.getAttribute('background-image-src');
			// 	try {
			// 		var img = new Image();
			// 			img.onload = function(){
			// 				bgimg.style.backgroundImage = 'url(' + bgimgsrc + ')';
			// 				bgimg.classList.remove('hidden');
			// 				bgimg.classList.add('imgloaded');
			// 				img.parentNode.removeChild(img);
			// 			}
			// 			img.src = bgimgsrc;
			// 	}
			// 	catch (err) {
			// 		console.log(err);
			// 	}
			// })

			//scripts must be loaded manually or they won't work; setTimeout is used to add the scripts *in order* to the rendering queue
			var scriptcount = 0;
			(function loadScript(){
			if (scripts[scriptcount]){
					setTimeout(function(){
						var newScript = document.createElement('script');
						newScript.onload = function(){
							scripts[scriptcount].parentNode.removeChild(scripts[scriptcount]);
							scriptcount++;
							loadScript(scriptcount);
						}
							newScript.src = scripts[scriptcount].getAttribute('src');
							newScript.classList.add('app-script');
							newScript.type = scripts[scriptcount].type;
							document.body.appendChild(newScript);
					}, 50)
				}
			})(scriptcount);

			this.changeNavLinkAppearance(this.links[page], this.navLinks);


			var appDivLinks = loadlocation.querySelectorAll('.nav-link');
			appDivLinks.forEach((link)=>{
				link.addEventListener('click', (e)=>{
					this.handleLinkClick(link, e);
				})
			})



		}

		window.dispatchEvent(this.event);

	}

	handleLinkClick(link, e){
		e.preventDefault();
		this.currentPage = this.htmlRegex.exec(link.getAttribute('href'))[1];
		this.getTemplate(this.currentPage);
		//using the pusState API to manage browser interactions
		window.history.pushState({'page': this.currentPage + '.html'}, null, this.currentPage + '.html');
	}


	preloadOtherViews(){
		var viewsToPreload = Array.prototype.slice.call(document.querySelectorAll('.preload'));

		viewsToPreload.forEach((link)=>{
			let preloadPageName = this.htmlRegex.exec(link.getAttribute('href'))[1];
			let preloadPageURL = preloadPageName  + '.html';
			let cachedDiv = document.createElement('div');

			this.myAsyncFunction(preloadPageName, preloadPageURL, cachedDiv, this.preloadElements);
			this.preloadViews = false;
		})

			
	}

	preloadElements(page, response){
		//cache app view
		var appDivResponse = response.getElementById('app');
		appDivResponse.removeAttribute('id');
		this.pageCache[page] = response;

		//preloading of images without appending them to the DOM
		var preloadImages = Array.prototype.slice.call(appDivResponse.querySelectorAll('.preload-img'));
		for (let i=0 ; i < preloadImages.length; i++){
			if(preloadImages[i].attributes.src){
				let image = new Image();
				image.src = preloadImages[i].getAttribute('src');
			}
			else if(preloadImages[i].getAttribute("background-image-src")){
				let image = new Image();
				image.src = preloadImages[i].getAttribute("background-image-src");
			}
		}
	}

	changeNavLinkAppearance(link, navlinks){
		for (let i=0; i<navlinks.length; i++){
			if(navlinks[i].classList.contains('active')){
				navlinks[i].classList.remove('active');
			}
		}
		link.classList.add('active');
	}
	

}

// if(typeof PRODUCTION !== "boolean"){
// 	let SPA = new spaOne();
// 	SPA.init();
// }

export default spaOne;