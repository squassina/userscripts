// ==UserScript==
// @name         Ultimate-Guitar Widener
// @namespace    https://github.com/squassina/userscripts
// @version      0.1
// @description  Applies the CSS --ug-layout-center-column-width: 0
// @author       Squassina
// @match        *://tabs.ultimate-guitar.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const SEL = '.UNiKi';
    const VAR = '--ug-layout-center-column-width';
    const VAL = '0';
    let obs;

    function applyStyle() {
        const el = document.querySelector(SEL);

        if (el) {
            el.style.setProperty(VAR, VAL);
            return true;
        }
        return false;
    }

    if (applyStyle()) {
        return;
    }

    obs = new MutationObserver((muts, observer) => {
        if (applyStyle()) {
            observer.disconnect();
        }
    });

    obs.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();
