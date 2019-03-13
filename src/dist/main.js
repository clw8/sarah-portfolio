!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/src",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.appDiv=document.getElementById("app"),this.navLinks=Array.prototype.slice.call(document.querySelectorAll("nav .nav-link")),this.htmlRegex=/^(.+)\.html$/,this.currentPage="",this.pageCache={},this.links={},this.preloadViews=!0,this.init=this.init.bind(this),this.getTemplate=this.getTemplate.bind(this),this.myAsyncFunction=this.myAsyncFunction.bind(this),this.applyDOMElements=this.applyDOMElements.bind(this),this.preloadOtherViews=this.preloadOtherViews.bind(this),this.preloadElements=this.preloadElements.bind(this),this.event=document.createEvent("Event"),this.event.initEvent("pagechange",!0,!0),t&&window.addEventListener("pagechange",t,!1)}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"init",value:function(){for(var e=this,t=0;t<this.navLinks.length;t++){var n=this.htmlRegex.exec(this.navLinks[t].getAttribute("href"))[1];this.links[n]=this.navLinks[t]}var i=function(t){if(!e.links.hasOwnProperty(t))return"continue";e.links[t].addEventListener("click",function(n){e.handleLinkClick(e.links[t],n)})};for(var o in this.links)i(o);this.appDiv.querySelectorAll(".nav-link").forEach(function(t){t.addEventListener("click",function(n){e.handleLinkClick(t,n)})});var a=document.querySelector(".active");this.currentPage=this.htmlRegex.exec(a.getAttribute("href"))[1],this.pageCache[this.currentPage]=document,window.addEventListener("popstate",function(t){e.getTemplate(t.state.page)}),window.history.pushState({page:this.currentPage+".html"},null,this.currentPage+".html"),setTimeout(function(){1==e.preloadViews&&e.preloadOtherViews()},2e3)}},{key:"getTemplate",value:function(e){if(this.pageCache.page)this.applyDOMElements(e,this.pageCache.page,this.appDiv);else{var t=e+".html";this.myAsyncFunction(e,t,this.appDiv,this.applyDOMElements)}}},{key:"myAsyncFunction",value:function(e,t,n,i){var o=new XMLHttpRequest;o.onload=function(){return i(e,o.response,n)},o.onerror=function(){return i(e,"There was an error retrieving the document. Please try again",n)},o.open("GET",t,!0),o.responseType="document",o.setRequestHeader("Content-type","text/html"),o.overrideMimeType("text/html"),o.send()}},{key:"applyDOMElements",value:function(e,t,n){var i=this;if(console.log("loading "+e),"string"==typeof t)n.innerHTML=t;else{this.pageCache[e]||(this.pageCache[e]=t);var o=t.getElementById("app"),a=Array.prototype.slice.call(o.querySelectorAll("img")),r=(Array.prototype.slice.call(o.querySelectorAll("*[background-image-src]")),Array.prototype.slice.call(t.querySelectorAll(".app-script")));n.classList.add("view-enter"),n.addEventListener("animationend",function(){n.classList.remove("view-enter")},!0),n.innerHTML="",Array.prototype.slice.call(document.body.querySelectorAll(".app-script")).forEach(function(e){document.body.removeChild(e)}),n.innerHTML=o.innerHTML,a.forEach(function(e){e.onload=function(){e.classList.remove("hidden"),e.classList.add("imgloaded")}});var s=0;!function e(){r[s]&&setTimeout(function(){var t=document.createElement("script");t.onload=function(){r[s].parentNode.removeChild(r[s]),s++,e()},t.src=r[s].getAttribute("src"),t.classList.add("app-script"),t.type=r[s].type,document.body.appendChild(t)},50)}(),this.changeNavLinkAppearance(this.links[e],this.navLinks),n.querySelectorAll(".nav-link").forEach(function(e){e.addEventListener("click",function(t){i.handleLinkClick(e,t)})})}window.dispatchEvent(this.event)}},{key:"handleLinkClick",value:function(e,t){t.preventDefault(),this.currentPage=this.htmlRegex.exec(e.getAttribute("href"))[1],this.getTemplate(this.currentPage),window.history.pushState({page:this.currentPage+".html"},null,this.currentPage+".html")}},{key:"preloadOtherViews",value:function(){var e=this;Array.prototype.slice.call(document.querySelectorAll(".preload")).forEach(function(t){var n=e.htmlRegex.exec(t.getAttribute("href"))[1],i=n+".html",o=document.createElement("div");e.myAsyncFunction(n,i,o,e.preloadElements),e.preloadViews=!1})}},{key:"preloadElements",value:function(e,t){var n=t.getElementById("app");n.removeAttribute("id"),this.pageCache[e]=t;for(var i=Array.prototype.slice.call(n.querySelectorAll(".preload-img")),o=0;o<i.length;o++){if(i[o].attributes.src)(new Image).src=i[o].getAttribute("src");else if(i[o].getAttribute("background-image-src")){(new Image).src=i[o].getAttribute("background-image-src")}}}},{key:"changeNavLinkAppearance",value:function(e,t){for(var n=0;n<t.length;n++)t[n].classList.contains("active")&&t[n].classList.remove("active");e.classList.add("active")}}]),e}();var a=function(){Array.prototype.slice.call(document.querySelectorAll(".nav-container-link")).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.target.nextElementSibling.classList.toggle("nav-dropdown")})});var e=document.querySelector("#copyright-year"),t=(new Date).getFullYear();e.innerHTML=t};function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.images=Array.prototype.slice.call(document.querySelectorAll("#app img")),this.imgcount=0,this.loaded=!1,this.event=new Event("initialload"),this.init=this.init.bind(this)}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"init",value:function(){var e=this;0==this.images.length&&this.dispatchEvent(),this.images.forEach(function(t){t.complete?(e.imgcount+=1,e.dispatchEvent()):t.onload=function(){e.imgcount+=1,e.dispatchEvent()}})}},{key:"dispatchEvent",value:function(){this.imgcount!=this.images.length||this.loaded||(window.dispatchEvent(this.event),this.loaded=!0)}}]),e}());function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.MOBILETRANSITIONWIDTH=t,this.header=document.getElementsByTagName("header")[0],this.appDiv=document.getElementById("app"),this.navBurgerContainer=document.querySelector(".nav-burger-container"),this.navLinks=Array.from(document.querySelectorAll(".nav-link")),this.homeView=document.querySelector(".home"),this.navHandlerMobile=this.navHandlerMobile.bind(this),this.navHandlerNotMobile=this.navHandlerNotMobile.bind(this),this.getWindowWidth=this.getWindowWidth.bind(this),this.navHandlerHome=this.navHandlerHome.bind(this),this.showNav=this.showNav.bind(this)}return function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(e,[{key:"init",value:function(){(this.homeView||this.getWindowWidth()<=this.MOBILETRANSITIONWIDTH)&&(this.header.classList.add("nav-hidden"),this.appDiv.classList.add("nav-hidden-appview"),window.addEventListener("mousedown",this.navHandlerNotMobile,!0),window.addEventListener("wheel",this.navHandlerNotMobile),window.addEventListener("keydown",this.navHandlerNotMobile)),this.navBurgerContainer.addEventListener("touchend",this.navHandlerMobile),this.navLinks.forEach(function(e){e.addEventListener("touchend",this.navHandlerMobile)},this),window.addEventListener("resize",this.showNav),window.addEventListener("touchend",this.navHandlerHome)}},{key:"navHandlerNotMobile",value:function(){this.getWindowWidth()>this.MOBILETRANSITIONWIDTH&&(this.showNav(),window.removeEventListener("mousedown",this.navHandlerNotMobile),window.removeEventListener("wheel",this.navHandlerNotMobile),window.removeEventListener("keydown",this.navHandlerNotMobile))}},{key:"getWindowWidth",value:function(){return Math.max(document.body.clientWidth,window.innerWidth,document.body.offsetWidth)}},{key:"navHandlerMobile",value:function(){this.getWindowWidth()<=this.MOBILETRANSITIONWIDTH&&(this.header.classList.toggle("nav-hidden"),this.appDiv.classList.toggle("nav-hidden-appview"))}},{key:"navHandlerHome",value:function(e){this.homeView&&e.target.classList.contains("main-view-wrapper")&&this.showNav()}},{key:"showNav",value:function(){this.header.classList.remove("nav-hidden"),this.appDiv.classList.remove("nav-hidden-appview")}}]),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var p=function(){function e(){g(this,e),this.event=new Event("initialload"),this.imageLoaded=this.imageLoaded.bind(this)}return m(e,[{key:"imageLoaded",value:function(){this.initialLoad||(window.dispatchEvent(this.event),e.InitialLoad=!0)}}]),e}(),y=function(e){function t(e){var n;return g(this,t),(n=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}(this,u(t).call(this))).element=e,n.cached=!1,n.bgimgsrc="",n.loadBg=n.loadBg.bind(v(v(n))),n.loadHandler=n.loadHandler.bind(v(v(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,p),m(t,[{key:"loadBg",value:function(e){if(this.HtmlElement=document.querySelector(this.element),this.option=e,this.HtmlElement&&!this.cached){this.bgimgsrc=this.HtmlElement.getAttribute("background-image-src");var t=new Image;t.addEventListener("load",this.loadHandler,!1),t.src=this.bgimgsrc}else this.HtmlElement&&this.cached&&(this.HtmlElement.style.background=this.backgroundStyle,this.HtmlElement.classList.remove("hidden"),this.HtmlElement.classList.add("imgloaded"))}},{key:"loadHandler",value:function(){try{this.backgroundStyle="".concat(this.option," url('").concat(this.bgimgsrc,"')"),this.HtmlElement.style.background=this.backgroundStyle,this.HtmlElement.classList.remove("hidden"),this.HtmlElement.classList.add("imgloaded"),this.cached=!0}catch(e){console.log(e)}this.imageLoaded()}}]),t}();p.InitialLoad=!1;var w=y;var b=function(){var e=document.querySelector("header"),t=document.querySelector("#app > div"),n=document.querySelector(".lightbox");function i(e){e&&screen.height>window.innerHeight&&/Mobi|Android/i.test(navigator.userAgent)&&(e.style.height=window.innerHeight+"px")}i(e),i(t),i(n)};function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.navWidth=200,this.tabletTransitionWidth=760,this.mobileTransitionWidth=500,this.imageRows=document.querySelectorAll(".row"),this.rowHeights=[],this.event=new Event("initialload"),this.setImagesInGrid=this.setImagesInGrid.bind(this),this.setImages=this.setImages.bind(this),this.pushtoImagesInRow=this.pushtoImagesInRow.bind(this),this.getNavWidth=this.getNavWidth.bind(this),window.addEventListener("resize",this.getNavWidth)}return function(e,t,n){t&&E(e.prototype,t),n&&E(e,n)}(e,[{key:"init",value:function(){this.setImagesInGrid(),this.getNavWidth(),window.addEventListener("resize",this.setImagesInGrid)}},{key:"setImagesInGrid",value:function(){var e=this;this.imageRows.forEach(function(t){var n=t.querySelectorAll("div img");e.pushtoImagesInRow(n,e.setImages)})}},{key:"pushtoImagesInRow",value:function(e,t){var n=[],i=0;e.forEach(function(o){var a=setInterval(function(){if(o.naturalWidth){clearInterval(a);var r=o.naturalWidth/o.naturalHeight;n.push({image:o,aspect:r}),(i+=1)==e.length&&t(n)}},50)})}},{key:"setImages",value:function(e){var t=this,n=window.innerWidth-this.navWidth,i=0,o=this.getPadding(),a=(e.length-1)*o/e.length;console.log(a);var r=0,s=0,l=0;e.forEach(function(e){i+=e.aspect}),e.forEach(function(o){var c=o.aspect/i;s=window.innerWidth>t.mobileTransitionWidth?c*n-a:c*window.innerWidth-a,o.image.complete?(l+=1,t.evaluateLoad(e,l)):o.image.onload=function(){l+=1,t.evaluateLoad(e,l)},o.image.style.width=s+"px",o.image.parentNode.style.width=s+"px",0===r&&(r=s/o.aspect),o.image.parentNode.style.height=r+"px",o.image.parentNode.style.backgroundImage="url(".concat(o.image.src,")"),o.image.style.visibility="hidden",o.image.parentNode.classList.add("imgloaded")})}},{key:"getNavWidth",value:function(){var e=window.innerWidth;this.navWidth=e>1300?.16*window.innerWidth+10:e>800?210:e>600?175:160}},{key:"getPadding",value:function(){return window.innerWidth>this.tabletTransitionWidth?10:4}},{key:"evaluateLoad",value:function(e,t){t==e.length&&(this.rowHeights.push(e[0].image.height),(this.rowHeights.reduce(function(e,t){return e+t},0)>window.innerHeight||/Mobi|Android/i.test(navigator.userAgent))&&window.dispatchEvent(this.event))}}]),e}();var k=function(){if(document.querySelector(".gallery")){var e=function(){h.classList.toggle("hidden"),h.classList.toggle("show-lightbox")},t=function(e){v.classList.contains("hidden")&&i(),v.classList.add("lightbox-content-fade"),setTimeout(function(){o(e,function(){setTimeout(function(){v.classList.remove("lightbox-content-fade")},600)})},450)},n=function(e){s=e.offsetX?e.offsetX:e.touches[0].pageX,l=e.offsetY?e.offsetY:e.touches[0].pageY;var t=s/w.offsetWidth*100,n=l/w.offsetHeight*100;d[d.findIndex(function(e){return e==c})].naturalWidth>w.offsetWidth?w.style.backgroundPosition=t+"% "+n+"%":w.style.backgroundPosition="50% "+n+"%"},i=function(){window.innerWidth>a&&(w.classList.toggle("hidden"),v.classList.toggle("hidden"),v.classList.contains("hidden")?w.addEventListener("mousemove",n):w.removeEventListener("mousemove",n))},o=function(e,t){g.style.backgroundImage="url('".concat(e.src,"')"),w.style.backgroundImage="url('".concat(e.src,"')");var n=e.parentNode.querySelector("p");f.innerHTML=n?n.innerHTML:"",t&&t()},a=760,r=new L;r.init(),window.addEventListener("resize",function(){r.init()});var s,l,c,d=Array.from(document.querySelectorAll(".row img")),u=document.querySelectorAll(".row div img"),h=document.querySelector(".lightbox"),v=document.querySelector(".lightbox .content"),g=document.querySelector(".lightbox .lightbox-image"),f=document.querySelector(".lightbox .caption"),m=document.querySelector(".lightbox-left-arrow"),p=document.querySelector(".lightbox-right-arrow"),y=document.querySelector(".lightbox-close"),w=document.querySelector(".zoomer");u.forEach(function(t){t.parentNode.addEventListener("click",function(){e(),o(c=t)})}),m.addEventListener("click",function(e){var n=d.indexOf(c);c=n-1<0?d[d.length-1]:d[n-1],t(c)}),p.addEventListener("click",function(e){var n=d.indexOf(c);c=n+1>d.length-1?d[0]:d[n+1],t(c)}),y.addEventListener("click",e),v.addEventListener("click",i),w.addEventListener("click",i)}};var S=function(){if(document.querySelector(".contact-wrapper")){var e=document.querySelector("#contact-submit"),t=document.querySelectorAll(".form-input");e.addEventListener("click",function(e){e.preventDefault();for(var n="",i=0;i<t.length;++i){var o=t[i];o.name&&(n+="".concat(o.value,"%$"))}var a=new XMLHttpRequest;a.onreadystatechange=function(){4==this.readyState&&200==this.status?document.getElementById("submit-res").innerHTML="Thank you for your message":0!==this.status&&200!==this.status&&void 0!==this.status&&(document.getElementById("submit-res").innerHTML="Something went wrong..Please try again.")},a.open("POST","https://script.google.com/macros/s/AKfycbxsfoCwkR_ReZfjUOeyEqjeTfQcKaMlWYtvbZULxOEZtECSodg/exec",!0),a.setRequestHeader("Content-Type","text/plain"),a.setRequestHeader("Accept","text/plain"),a.send(n)})}};!function(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}(function(){a();var e=new w(".about-wrapper"),t=new w(".contact-wrapper"),n=new w(".main-view-wrapper"),i=new o(r);function r(){switch(i.currentPage){case"about":e.loadBg("linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),");break;case"contact":t.loadBg("linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),"),S();break;case"index":n.loadBg("rgb(3, 3, 3)");break;case"nature-photos":case"lab-photos":k();break;default:s.init()}b()}i.init(),new c(500).init(),window.addEventListener("initialload",function e(){var t=Date.now()-loadTime;if(t>1e3){var n=document.querySelector(".loader");n&&(n.classList.add("hidden"),setTimeout(function(){n.style.display="none"},1100),window.removeEventListener("initialload",this.removeLoader,!1))}else setTimeout(e,50)},!1),r()})}]);