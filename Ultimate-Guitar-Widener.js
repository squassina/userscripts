// ==UserScript==
// @name         Ultimate Guitar - Full Width Override
// @namespace    https://github.com/squassina/userscripts
// @version      0.6
// @description  Widens content and removes intrusive artifacts using pure CSS injection.
// @author       Squassina
// @match        *://tabs.ultimate-guitar.com/*
// @grant        none
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    html body .cy3pC,
    html body div.cy3pC {
        max-width: unset !important;
        min-width: unset !important;
    }

    .tBIAy {
        max-width: unset !important;
        min-width: unset !important;
        width: auto !important;
    }
`);
