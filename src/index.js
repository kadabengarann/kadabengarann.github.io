import "./style/main.scss";

import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: 'horizontal',
  smartphone: {
    smooth: true,
  },
  tablet: {
    direction: 'horizontal',
    smooth: true,
  },
});

scroll.direction = 'vertical';
console.log(scroll.direction);