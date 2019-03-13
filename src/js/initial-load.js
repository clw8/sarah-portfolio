class initialLoad{
    constructor(){
        this.images = Array.prototype.slice.call(document.querySelectorAll('#app img'));
        this.imgcount = 0;
        this.loaded = false;
        this.event = new Event('initialload');  
        
        this.init = this.init.bind(this);
    }
    
    init(){
        if(this.images.length == 0 ){
            this.dispatchEvent();
        }

            this.images.forEach((img)=>{
            
                if(img.complete){
                    this.imgcount += 1;
                    this.dispatchEvent();
                }
                else{
                    img.onload = ()=>{
                        this.imgcount += 1;
                        this.dispatchEvent();
                    }
                }
            
            })
       
    }

    dispatchEvent(){
        if(this.imgcount == this.images.length && !this.loaded){
            window.dispatchEvent(this.event);
            this.loaded = true;
        }
    }

}

export default new initialLoad;
