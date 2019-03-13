function mobileHeightFix() {
    let header = document.querySelector('header');
    let appInnerDiv = document.querySelector('#app > div');
    let lightbox = document.querySelector('.lightbox');

    function fixHeightOnEl(elem){

        if(!!elem && screen.height > window.innerHeight && /Mobi|Android/i.test(navigator.userAgent)){
            elem.style.height = window.innerHeight + 'px';
        }
    }

    fixHeightOnEl(header);
    fixHeightOnEl(appInnerDiv);
    fixHeightOnEl(lightbox);
}

export default mobileHeightFix;