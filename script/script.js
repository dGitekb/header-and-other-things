const hamburger = document.querySelector(".toggle-button");
const navigation = document.querySelector(".nav-menu");
const first = document.querySelector(".first-line");
const second = document.querySelector(".second-line");
const third = document.querySelector(".thirde-line");
const about = document.querySelector(".about-me");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
    first.classList.toggle("active");
    second.classList.toggle("active");
    third.classList.toggle("active");
    about.classList.toggle("active");
});
