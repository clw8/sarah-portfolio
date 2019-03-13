import spaOne from './app.js';
import nav from './js/nav.js';
import initialLoad from './js/initial-load.js';
import Menu from './js/menu.js';
import LoadImages from './js/load-images.js';
import mobileHeightFix from './js/mobile-fix.js';

import naturePhotos from './js/nature_photos.js';
import contact from './js/contact.js';


function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  ready(fn);


function fn(){

    nav();

    let aboutLoad = new LoadImages('.about-wrapper');
    let contactLoad= new LoadImages('.contact-wrapper');
    let homeLoad = new LoadImages('.main-view-wrapper');


    let SPA = new spaOne(onPageLoad);
    SPA.init();

    const mobileTransitionWidth = 500
    let menu = new Menu(mobileTransitionWidth);
    menu.init();


    function onPageLoad(){
      switch(SPA.currentPage){
        case "about":
          aboutLoad.loadBg('linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),');
          break;
        case "contact":
          contactLoad.loadBg('linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),');
          contact();
          break;
        case "index":
          homeLoad.loadBg('rgb(3, 3, 3)');
          break;
        case "nature-photos":
          naturePhotos();
          break;
        case "lab-photos":
          naturePhotos();
          break;
        default:
        //fires the initialload even once all images are loaded
          initialLoad.init();
          break;
      }

      mobileHeightFix();
      
    }

      
      //custom event for loader 
      //initial load events are fired from the photo pages and the about, contact and home pages
      //handling for other pages is
    window.addEventListener('initialload', removeLoader, false);

    function removeLoader(){
      let timeToLoad = Date.now() - loadTime
      if(timeToLoad > 1000){
        let loader = document.querySelector('.loader');
        if(!!loader){
          loader.classList.add("hidden");
          setTimeout(()=>{
              loader.style.display = "none";
          }, 1100);
          window.removeEventListener('initialload', this.removeLoader, false);
        }
      }
      else{
        setTimeout(removeLoader, 50);
      }
    }
  
    //initial call for first page
    onPageLoad();
    
}

