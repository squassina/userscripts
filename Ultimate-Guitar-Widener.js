// ==UserScript==
// @name         Ultimate Guitar Widener
// @namespace    https://github.com/squassina/userscripts
// @version      0.3
// @description  Minimalist script: widens content and removes intrusive artifacts using pure CSS injection.
// @author       Squassina
// @match        *://tabs.ultimate-guitar.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        /* Widen main content column */
        .UNiKi {
            --ug-layout-center-column-width: 0 !important;
        }

        /* Remove sidebar, banners, and promotional elements */
        ._2yJ-h,
        [data-has-button="true"],
        ._3-DFG {
            display: none !important;
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.documentElement.appendChild(style);
})();
