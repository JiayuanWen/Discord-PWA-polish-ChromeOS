// ==UserScript==
// @name            Discord colored title bar
// @name:cn         Discord 彩色标题栏
// @version         0.1
// @description     Change title bar color for Discord web app
// @description:cn  更改 Discord 的标题栏颜色
// @author          Jiayuan "Weldon" Wen
// @copyright       none (public-domain)
// @match           https://discord.com/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var meta = document.createElement('meta');
    meta.name = "theme-color";
    meta.content = "#35393e";
    document.getElementsByTagName('head')[0].appendChild(meta);
})();
