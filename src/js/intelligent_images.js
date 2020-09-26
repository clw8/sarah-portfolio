
  class IntelligentImages{
      constructor(){
        this.navWidth = 200;
        this.tabletTransitionWidth = 760;
        this.mobileTransitionWidth = 500;

        this.imageRows = document.querySelectorAll('.row');
        //imgcount
        this.rowHeights = [];
        this.event = new Event('initialload');        


        //bindings
        this.setImagesInGrid = this.setImagesInGrid.bind(this);
        this.setImages = this.setImages.bind(this);
        this.pushtoImagesInRow = this.pushtoImagesInRow.bind(this);
        this.getNavWidth = this.getNavWidth.bind(this);

        window.addEventListener("resize", this.getNavWidth);
      }
      
      init(){
        this.setImagesInGrid();
        this.getNavWidth();

        window.addEventListener("resize", this.setImagesInGrid);
    }
    
    setImagesInGrid(){
      this.imageRows.forEach(row => {
        let rowImages = row.querySelectorAll('div img');
        this.pushtoImagesInRow(rowImages, this.setImages);
      })
    }
    //creates imagesInRow variable that holds the images in a row
    //this variable is passed to the setImages function
    pushtoImagesInRow(rowImages, callback){
      let imagesInRow = [];
      let rowimgcount = 0;

      //naturalwidth only becomes a non-nil value at some point
      //betwen the image loading and it being selectable
      //callback is to execute synchronous JS once all image natural widths/heights have been calculated
      rowImages.forEach((image) => {
        var setAspect = setInterval(() => {
          if(typeof image.naturalWidth === 'number') {
            clearInterval(setAspect);
            let aspect = image.naturalWidth / image.naturalHeight;
            imagesInRow.push({image: image, aspect: aspect});
            rowimgcount += 1;
            if(rowimgcount == rowImages.length){
              callback(imagesInRow);
            }
          }
        }, 50)
      });
    };

    // the calculation for keeping the aspect of each img while having them fit nicely on a row
    setImages(imagesInRow){

      let widthOfRow = window.innerWidth - this.navWidth;
      let sumOfAspects = 0;
      //padding for one image is 5px on both sides
      let horizontalPadding = this.getPadding();
      let horizontalPaddingAdjusted = (imagesInRow.length - 1) * horizontalPadding / (imagesInRow.length);

      let height = 0, width = 0;
      let imgsLoaded = 0;
      imagesInRow.forEach((imgobj) => {
        sumOfAspects += imgobj.aspect;
      });
      imagesInRow.forEach((imgobj) => {
        //set width
        if(imgobj.aspect) {
          let imgWidthPercentage = imgobj.aspect / sumOfAspects;
          if(window.innerWidth > this.mobileTransitionWidth){
            width = (imgWidthPercentage * widthOfRow) - horizontalPaddingAdjusted;
          }
          else{
            width = imgWidthPercentage * window.innerWidth - horizontalPaddingAdjusted;
          }
          if(imgobj.image.complete){
            imgsLoaded += 1;
            this.evaluateLoad(imagesInRow, imgsLoaded);
          }
          else{
           
            imgobj.image.onload = ()=>{
              imgsLoaded += 1;
              this.evaluateLoad(imagesInRow, imgsLoaded);
            }
            imgobj.image.onerror = () => {
              imgsLoaded += 1;
              this.evaluateLoad(imagesInRow, imgsLoaded);
            }
          }
          
          
          //set height and width
          imgobj.image.style.width = width + "px";
          imgobj.image.parentNode.style.width = width + "px";
          //one uniform height for whole row
          height === 0 ? height = width / imgobj.aspect : null;
          imgobj.image.parentNode.style.height = height + "px";
          //set as background image to make the edges neater
          imgobj.image.parentNode.style.backgroundImage = `url(${imgobj.image.src})`;
          imgobj.image.style.visibility = "hidden";
          imgobj.image.parentNode.classList.add('imgloaded');
        } else {
            imgsLoaded += 1;
            this.evaluateLoad(imagesInRow, imgsLoaded);
        }
   
      });
    }


    getNavWidth() {
      let windowWidth = window.innerWidth;
      if(windowWidth > 1300){
        this.navWidth = (window.innerWidth * 0.16) + 10;
      }
      else if(windowWidth > 800){
        this.navWidth = 210;
      }
      else if(windowWidth > 600){
        this.navWidth = 175;
      }
      else{
        this.navWidth = 160;
      }
    }

    getPadding() {
      let windowWidth = window.innerWidth;
      if( windowWidth > this.tabletTransitionWidth){
        return 10;
      }
      else{
        return 4;
      }
    }

    evaluateLoad(imagesInRow, imgsLoaded){
      if(imgsLoaded == imagesInRow.length){
        setTimeout(() => {
          // allow time for browser render
          window.dispatchEvent(this.event);
        }, 500)
      }
    }

  }

export default IntelligentImages;