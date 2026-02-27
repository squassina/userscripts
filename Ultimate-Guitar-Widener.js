// ==UserScript==
// @name         Ultimate Guitar - Full Width Override
// @namespace    https://github.com/squassina/userscripts
// @version      0.5
// @description  Widens content and removes intrusive artifacts using pure CSS injection.
// @author       Squassina
// @match        *://tabs.ultimate-guitar.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        /* Force the CSS variable at the root level */
        :root {
            --ug-layout-center-column-width: 100% !important;
            --ug-layout-page-width: 100% !important;
        }

        /* Target known layout column classes */
        .UNiKi, .XSbtP, [class*="XSbtP"] {
            --ug-layout-center-column-width: 100% !important;
            max-width: 100% !important;
        }

        /* Expand main layout containers as fallback */
        main, article {
            max-width: 100% !important;
            width: 100% !important;
        }

        /* Hide sidebar, banners, and promotional elements */
        ._2yJ-h,
        [data-has-button="true"],
        ._3-DFG,
        aside,
        section[data-test-id="sidebar"] {
            display: none !important;
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.documentElement.appendChild(style);
})();
