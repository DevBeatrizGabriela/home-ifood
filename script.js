const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu')

NavMenu.addEventListener('click', () => {
    if (mobileMenu.style.display != 'none') {
    mobileMenu.style.display = 'none'; 
    menu.classList.toggle('ativo');

    menu.addEventListener('click', () => {
        mobileMenu.style.display = 'none'; 
        
    })

} else {
        mobileMenu.style.display = 'block';  
         
    }
})


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})