let nav = document.querySelector(".header__bottom");
let content = document.querySelector(".content");
const navOffSet = nav.offsetTop;
window.addEventListener("scroll", () => {
  if (window.scrollY >= navOffSet) {
    nav.classList.add("sticky");
    content.style.marginTop = "80px";
  } else {
    nav.classList.remove("sticky");
    content.style.marginTop = "0";
  }
});

// Navbar mobile
let bar = document.querySelector(".fa-bars");
let listBar = document.querySelector(
  ".header .header__bottom .container .box:nth-child(3) ul"
);
let closeBar = document.querySelector(".fa-xmark");
bar.addEventListener("click", () => {
  listBar.classList.add("open-bar");
});
closeBar.addEventListener("click", function () {
  listBar.classList.remove("open-bar");
});

