import "./style/main.scss";

import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: 'horizontal',
  smartphone: {
    direction: 'vertical',
    smooth: true,
  },
  tablet: {
    direction: 'vertical',
    smooth: true,
  },
});

window.addEventListener("load", function () {
  
  loaded();

})
async function loaded() {
  const loader = document.querySelector(".loader");
  console.log(loader);

  await new Promise(resolve => setTimeout(resolve, 1000));
  loader.classList.add("hidden");
}

const mainContainer = document.querySelector(".section1");

const widthStart  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
document.body.clientHeight;
if (widthStart <= 1024) {
  console.log('kecil');
  if (!(mainContainer.classList.contains('small')))
 {
          mainContainer.classList.add("small");
  }
}

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
if (width <= 1024) {
  if (!(mainContainer.classList.contains('small')))
 {
  document.location.reload(true);
  }

} else {
  if (mainContainer.classList.contains('small'))
 {
   document.location.reload(true)
  }

}
 console.log(width, height);
}, true);

//     // console.log('ganti');
// document.addEventListener("DOMContentLoaded", function () {
//   const judul = document.querySelector(".section-title");

// const navbar = document.querySelector(".navbar");

// if (!(judul.classList.contains("is-inview"))) {
// }else{
//       navbar.classList.remove("bordered");
// }

// })

// scroll.on('call', () => {
//     const navbar = document.querySelector(".navbar");
//   navbar.classList.toggle("bordered");
// });