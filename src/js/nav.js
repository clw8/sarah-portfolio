function nav(){
  var navContainerLink = Array.prototype.slice.call(document.querySelectorAll('.nav-container-link'));
  navContainerLink.forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      e.target.nextElementSibling.classList.toggle('nav-dropdown');
    })
  })


  //copyright year
  let copyrightSpan = document.querySelector('#copyright-year');
  const date = new Date().getFullYear();
  copyrightSpan.innerHTML = date;
}
if(typeof PRODUCTION !== "boolean"){
  // nav();
}
export default nav;

