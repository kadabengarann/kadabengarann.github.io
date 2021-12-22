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
