import IntelligentImages from './intelligent_images.js';


function naturePhotos(){
  if(!!document.querySelector('.gallery')){
    let mobileTransitionWidth = 760;
  
    let intelligentGrid = new IntelligentImages();
    intelligentGrid.init();
    window.addEventListener('resize', function(){
      intelligentGrid.init();  
    })

    let images = Array.from(document.querySelectorAll('.row img'));    
    
    //LIGHTBOX script below (no dependencies):
    const imagesForLightBox = document.querySelectorAll('.row div img');
    const lightbox = document.querySelector('.lightbox');
    const lcontent = document.querySelector('.lightbox .content');
    const limage = document.querySelector('.lightbox .lightbox-image');
    const lcaption = document.querySelector('.lightbox .caption');
    const lightboxLeftArrow= document.querySelector('.lightbox-left-arrow');
    const lightboxRightArrow= document.querySelector('.lightbox-right-arrow');
    const closeButton = document.querySelector('.lightbox-close');
    const zoomerDiv= document.querySelector('.zoomer');
    let offsetX,offsetY;
    let currentImage;
    
    imagesForLightBox.forEach((image) => {
      image.parentNode.addEventListener('click', () => {
            toggleLightbox();
            currentImage = image;
            setImagesLightbox(currentImage);
        })
      })

      lightboxLeftArrow.addEventListener('click', (e) => {
        let imgIndex = images.indexOf(currentImage);
        currentImage = (imgIndex - 1) < 0 ? images[images.length - 1] : images[imgIndex - 1];
        transitionLightboxContent(currentImage);
      })

      lightboxRightArrow.addEventListener('click', (e) => {
        let imgIndex = images.indexOf(currentImage);
        currentImage = (imgIndex + 1) > (images.length - 1) ? images[0] : images[imgIndex + 1];
        transitionLightboxContent(currentImage);
      })

      function toggleLightbox(){
        lightbox.classList.toggle("hidden");
        lightbox.classList.toggle("show-lightbox");
      }

      function transitionLightboxContent(currentImage){
        //if zoom is activated, unzoom
        if(lcontent.classList.contains('hidden')){
          toggleZoom();
        }
        lcontent.classList.add('lightbox-content-fade');
        setTimeout(()=>{
            setImagesLightbox(currentImage, function(){
              setTimeout(()=>{lcontent.classList.remove('lightbox-content-fade')}, 600);
            });
        }, 450);
      }

      function zoom(e){
          e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
          e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageY
          let x = offsetX/zoomerDiv.offsetWidth*100
          let y = offsetY/zoomerDiv.offsetHeight*100
          let naturalWidthOfImage = images[images.findIndex((img)=> img == currentImage)].naturalWidth;
          if(naturalWidthOfImage > zoomerDiv.offsetWidth){
            zoomerDiv.style.backgroundPosition = x + '% ' + y + '%';
          }
          else{
            zoomerDiv.style.backgroundPosition = '50% ' + y + '%';
          }
      }

      function toggleZoom(){
      //  lcontent.style.opacity = "0";
        if(window.innerWidth > mobileTransitionWidth){

          zoomerDiv.classList.toggle('hidden');
          lcontent.classList.toggle('hidden');
          if(lcontent.classList.contains('hidden')){
            zoomerDiv.addEventListener('mousemove', zoom);
          }
          else{
            zoomerDiv.removeEventListener('mousemove', zoom);
          }
        }
      }

      function setImagesLightbox(currentImage, callback){
        limage.style.backgroundImage = `url('${currentImage.src}')`;
        zoomerDiv.style.backgroundImage = `url('${currentImage.src}')`;
        let caption = currentImage.parentNode.querySelector('p');
        !!caption ? lcaption.innerHTML = caption.innerHTML : lcaption.innerHTML = "";
        if(!!callback){
          callback();
        }
      }

      closeButton.addEventListener('click', toggleLightbox);

      lcontent.addEventListener('click', toggleZoom);
      zoomerDiv.addEventListener('click', toggleZoom);


    
  }
}

if(typeof PRODUCTION !== "boolean"){

  // naturePhotos();
}
export default naturePhotos;

//deferred loading of images
//set src as blank base 64
// data-src holds url
// load imgs in order

//lightbox
// remove scroll Y on window
// add close button

//js
// nomodule scripts for old browsers <script nomodule src=”compiled.js”></script>
