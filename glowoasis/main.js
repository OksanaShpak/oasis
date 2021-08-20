const menuBTN = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBTN.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
});