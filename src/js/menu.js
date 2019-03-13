

class Menu{

  constructor(MOBILETRANSITIONWIDTH){
    this.MOBILETRANSITIONWIDTH = MOBILETRANSITIONWIDTH;
    this.header = document.getElementsByTagName('header')[0];
    this.appDiv = document.getElementById('app');
    this.navBurgerContainer = document.querySelector('.nav-burger-container');
    this.navLinks = 	Array.from(document.querySelectorAll('.nav-link'));
    this.homeView = document.querySelector('.home');

      
    //bindings
    this.navHandlerMobile = this.navHandlerMobile.bind(this);
    this.navHandlerNotMobile = this.navHandlerNotMobile.bind(this);
    this.getWindowWidth = this.getWindowWidth.bind(this);
    this.navHandlerHome = this.navHandlerHome.bind(this);
    this.showNav = this.showNav.bind(this);
  }

  init(){
    if(!!this.homeView || this.getWindowWidth() <= this.MOBILETRANSITIONWIDTH){
      this.header.classList.add('nav-hidden');
      this.appDiv.classList.add('nav-hidden-appview');
  
      window.addEventListener('mousedown', this.navHandlerNotMobile, true);
      window.addEventListener('wheel', this.navHandlerNotMobile);
      window.addEventListener('keydown', this.navHandlerNotMobile);
    
    }

    this.navBurgerContainer.addEventListener('touchend', this.navHandlerMobile);
    this.navLinks.forEach(function(link){
      link.addEventListener('touchend', this.navHandlerMobile);
    }, this);

    window.addEventListener('resize', this.showNav);
    window.addEventListener('touchend', this.navHandlerHome);

  }

    navHandlerNotMobile(){
      if(this.getWindowWidth() > this.MOBILETRANSITIONWIDTH){
        this.showNav();
        window.removeEventListener('mousedown', this.navHandlerNotMobile);
        window.removeEventListener('wheel', this.navHandlerNotMobile);
        window.removeEventListener('keydown', this.navHandlerNotMobile);
      }
    }


    getWindowWidth(){
      return Math.max(
        document.body.clientWidth,
        window.innerWidth,
        document.body.offsetWidth
        )
      }

    navHandlerMobile(){
      if(this.getWindowWidth() <= this.MOBILETRANSITIONWIDTH){
        this.header.classList.toggle('nav-hidden');
        this.appDiv.classList.toggle('nav-hidden-appview'); 
      }
    }

    navHandlerHome(e){
      //check we are on right page first
      if(!!this.homeView){
        if(e.target.classList.contains("main-view-wrapper")){
          this.showNav();
        }
      }
    }
    
  
      
  showNav(){
      this.header.classList.remove('nav-hidden');
      this.appDiv.classList.remove('nav-hidden-appview'); 
  }
  
};


if(typeof PRODUCTION !== "boolean"){
//  let menu = new Menu(500);
//  menu.init();
}
export default Menu;


 