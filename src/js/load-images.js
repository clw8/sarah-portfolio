
class LoadImagesBasic{
    constructor(){
        
        this.event = new Event('initialload');        
        this.imageLoaded = this.imageLoaded.bind(this);
    }
    
    imageLoaded(){
        if(!this.initialLoad){       
            window.dispatchEvent(this.event);
            LoadImagesBasic.InitialLoad = true;
        }
    }

 
}

class LoadImages extends LoadImagesBasic{
    constructor(element){
        super();
        this.element = element;
        this.cached = false;
        this.bgimgsrc = "";
        this.loadBg = this.loadBg.bind(this);
        this.loadHandler = this.loadHandler.bind(this);
    
    }
    loadBg(option){
        this.HtmlElement = document.querySelector(this.element);
        this.option = option;
        if(!!this.HtmlElement && !this.cached){
            this.bgimgsrc = this.HtmlElement.getAttribute('background-image-src');
            let img = new Image();
            img.addEventListener('load', this.loadHandler , false);
            img.src = this.bgimgsrc;

            img.onerror = this.loadHandler
        }
        else if(!!this.HtmlElement && this.cached){
            this.HtmlElement.style.background = this.backgroundStyle;
            this.HtmlElement.classList.remove('hidden');
            this.HtmlElement.classList.add('imgloaded');

        }
    }

    loadHandler(){
        try {
            this.backgroundStyle = `${this.option} url('${this.bgimgsrc}')`
            //backgroundStyle = `url('${this.bgimgsrc}')`
            this.HtmlElement.style.background = this.backgroundStyle;
            // this.HtmlElement.style.background = this.option;
            this.HtmlElement.classList.remove('hidden');
            this.HtmlElement.classList.add('imgloaded');
            this.cached = true;
        }
        catch(err) {
            console.log(err);
        }
        this.imageLoaded();
    }
}

LoadImagesBasic.InitialLoad = false;


export default LoadImages;