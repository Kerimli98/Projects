const burger = document.querySelector(".nav-burger");

function burgerEvent(){
    burger.classList.toggle("change");
    const navbarList = document.querySelector('.navbar-links');
    navbarList.classList.toggle('navbar-links-burger-mobile');
    navbarList.style.top = document.querySelector(".navbar").clientHeight + "px";
}

burger.addEventListener('click', burgerEvent);
