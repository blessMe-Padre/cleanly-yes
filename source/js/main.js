import { initNav } from './modules/nav';
import { initStickyHeader } from './modules/sticky-header';
import { initScrollToTop } from './modules/scroll-to-top';
import { initSlider } from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

  // Modules
  initStickyHeader();
  initNav();
  initScrollToTop();
  initSlider();
});
