// ==UserScript==
// @name         Discord colored title bar
// @version      0.1
// @description  Change title bar color for Discord web app
// @author       Jiayuan "Weldon" Wen
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var meta = document.createElement('meta');
    meta.name = "theme-color";
    meta.content = "#35393e";
    document.getElementsByTagName('head')[0].appendChild(meta);
})();