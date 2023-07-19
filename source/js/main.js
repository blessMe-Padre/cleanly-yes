import { initNav } from './modules/nav';
import { initStickyHeader } from './modules/sticky-header';
import { initScrollToTop } from './modules/scroll-to-top';
import { initSlider } from './modules/slider';
import { initMask } from './modules/mask';
import { initValidation } from './modules/validation';
import baguetteBox from './modules/baguettebox.js';


window.addEventListener('DOMContentLoaded', () => {

  // Modules
  initStickyHeader();
  initNav();
  initScrollToTop();
  initSlider();
  initMask();
  initValidation();
  baguetteBox.run('.gallery__wrapper');
});
