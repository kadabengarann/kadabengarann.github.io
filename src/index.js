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
