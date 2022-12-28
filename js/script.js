// changing opacity dyring the scrolling
const header = document.querySelector(".header");

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add('header-scrolled');        
    } 
    else {
            header.classList.remove('header-scrolled'); 
    }
}