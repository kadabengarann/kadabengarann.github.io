import "./style/main.scss";

import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: 'horizontal',
  smartphone: {
    direction: 'vertical',
    smooth: false,
  },
  tablet: {
    direction: 'vertical',
    smooth: false,
  },
});

const navBtn = document.querySelector(".navBtn");
const navCloseBtn = document.querySelector(".navbar_closeBtn");
const navMenu = document.querySelector(".navbar");
const navMenuPages = document.querySelector(".navbar_pages");
const navMenuLinks = document.querySelector(".navbar_links");

navBtn.addEventListener("click", openMenu);
navCloseBtn.addEventListener("click", closeMenu);

function openMenu() {
  console.log('open nav');
    navBtn.classList.toggle("hide");
    navCloseBtn.classList.toggle("hide");
    navMenu.classList.toggle("open");
    navMenuPages.classList.toggle("hide");
    navMenuLinks.classList.toggle("hide");
}
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navBtn.classList.remove("hide");
    navCloseBtn.classList.add("hide");
    navMenu.classList.remove("open");
    navMenuPages.classList.add("hide");
    navMenuLinks.classList.add("hide");
}

window.addEventListener('resize', function(event) {
    const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

console.log((width*84.6)/100, height);
}, true);

    // console.log('ganti');
document.addEventListener("DOMContentLoaded", function () {
  const judul = document.querySelector(".section-title");

const navbar = document.querySelector(".navbar");

if (!(judul.classList.contains("is-inview"))) {
}else{
      navbar.classList.remove("bordered");
}

})

scroll.on('call', () => {
    const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("bordered");
});