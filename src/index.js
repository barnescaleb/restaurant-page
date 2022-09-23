import { initialPageLoad } from './initial-page-load.js';
import { menu } from './menu.js';
import { dog } from './dog.js';

initialPageLoad();

// Tab Switcher Module

let tabSwitcher = (function() {

    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu);

    const dogTab = document.querySelector(".dog");
    dogTab.addEventListener("click", dog);

})();