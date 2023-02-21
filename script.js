function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "icons/icons8-menu-arredondado-20.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "iconx20.png";
    }
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})