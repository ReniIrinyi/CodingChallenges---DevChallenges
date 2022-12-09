const btn = document.querySelector(".header-content-right-hamburger--button");
const nav = document.querySelector(".header-content-right-nav");

btn.addEventListener("click", function () {
  setTimeout(() => {
    nav.classList.toggle("show");
  }, 350);
});
