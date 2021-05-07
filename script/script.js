const hamburger = document.querySelector(".toggle-btn");
const navigation = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
});
