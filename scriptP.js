let botonMenu = document.querySelector(".menu-mobile");
let navMobile = document.querySelector(".menu-mobile__list");
navMobile.style.display = "none";
botonMenu.addEventListener('click',()=>{
    if (navMobile.style.display == "none") {
        navMobile.style.display = "flex";
    } else {
        navMobile.style.display = "none";
    } 
    }
)