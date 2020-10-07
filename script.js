let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let exit = document.getElementById("exit");

window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  const coffeeImage = document.querySelector(".profile-image");
  const headline = document.querySelector("#headline");
  preload.classList.add("preload-finish");
  coffeeImage.classList.add("fadeInLeft");
  nav.classList.add("slideInRight");
  headline.classList.add("fadeInUp");
});

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  e.preventDefault();
});

exit.addEventListener("click", function (e) {
  nav.classList.add("hide-mobile");
  e.preventDefault();
});
