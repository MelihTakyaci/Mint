window.addEventListener("scroll" , function(){
    var nav = this.document.querySelector('header')
    nav.classList.toggle('sticky' , window.scrollY > 0);
})