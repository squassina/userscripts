// ==UserScript==
// @name         Ultimate Guitar Widener
// @namespace    https://github.com/squassina/userscripts
// @version      0.2
// @description  Minimalist script: widens content and removes the most intrusive artifacts using pure CSS injection.
// @author       Squassina
// @match        *://tabs.ultimate-guitar.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // CSS injected at document-start (page loading) is the fastest and cleanest way
    // to apply all style modifications.

    const cssStyles = `
        /* --- 1. WIDENER LOGIC --- */
        
        /* Main rule that forces the central layout column to occupy 100% of the width. */
        .UNiKi {
            --ug-layout-center-column-width: 0 !important;
        }

        /* --- 2. CLEANER LOGIC --- */
        
        /* Removes the RIGHT SIDEBAR (Recommendations/Ads) */
        ._2yJ-h,
        
        /* Removes the TOP PRO/OFFER BANNER (e.g., "Welcome Offer") */
        /* Uses the attribute selector which is more stable */
        [data-has-button="true"],
        
        /* Removes the "Official Tab" / "Backing Track" BUTTON BAR */
        /* Frees up vertical space above the tab controls */
        ._3-DFG {
            display: none !important;
        }
    `;

    // Inject the CSS cleanly and directly, respecting @grant none.
    try {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = cssStyles;
        document.documentElement.appendChild(style);
    } catch (e) {
        console.error("UG Minimalist: Failed to inject CSS.", e);
    }
})();
