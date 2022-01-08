import LocomotiveScroll from "locomotive-scroll";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener("load", function () {
  loaded();
})
let scroll;

async function loaded() {
  const loader = document.querySelector(".loader");
  console.log(loader);

  await new Promise(resolve => setTimeout(resolve, 1000));
  loader.classList.add("hidden");

  await new Promise(resolve => setTimeout(resolve, 500));
  document.body.style.overflow = 'visible';
  scroll = new LocomotiveScroll({
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
  
}
const linkMove = document.querySelectorAll(".a-move");
const loaderTrans = document.querySelector(".loader-trans");

function showLoader() {
    loaderTrans.classList.add("visible");
}

linkMove.forEach(n => n.addEventListener("click", showLoader));


const mainContainer = document.querySelector("#root");

const widthStart  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
document.body.clientHeight;
if (widthStart <= 1024) {
  console.log('kecil');
  if (!(mainContainer.classList.contains('small')))
 {
   console.log('tambah kelas');
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
  console.log('kecil');          mainContainer.classList.add("small");
  scroll.destroy()
    scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: false,
  direction: 'vertical',
  smartphone: {
    direction: 'vertical',
    smooth: false,
  },
  tablet: {
    direction: 'vertical',
    smooth: false,
  },
});   
}

} else {
  if (mainContainer.classList.contains('small'))
 {
   console.log('besar');  
   setTimeout(mainContainer.classList.remove("small"), 1000);
   scroll.destroy()
    scroll = new LocomotiveScroll({
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
  }

}
 console.log(width, height);
}, true);