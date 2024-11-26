let hamburger = document.querySelector(".hamburger");
let btnClose = document.querySelector(".close-btn");
let nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-reveal");
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("nav-reveal");
});
