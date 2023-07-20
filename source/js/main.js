import { initNav } from './modules/nav';
import { initStickyHeader } from './modules/sticky-header';
import { initScrollToTop } from './modules/scroll-to-top';
import { initSlider } from './modules/slider';
import { initMask } from './modules/mask';
import { initValidation } from './modules/validation';
import baguetteBox from './modules/baguettebox.js';
import { initIntroSlider } from './modules/intro-slider';
import { initScroll } from './modules/scroll';
import WOW from './modules/wow';
import { initTabs } from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {

  // Modules
  initScroll();
  initStickyHeader();
  initNav();
  initScrollToTop();
  initIntroSlider();
  initSlider();
  initMask();
  initValidation();
  initTabs();
  baguetteBox.run('.gallery__wrapper');
  new WOW().init();
});
