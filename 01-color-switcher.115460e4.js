!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStart.addEventListener("click",(function(a){t.btnStop.disabled=!1,t.btnStart.disabled=!0,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(a){t.btnStop.disabled=!0,t.btnStart.disabled=!1,clearInterval(n)})),t.btnStop.disabled=!0;var n=null}();
//# sourceMappingURL=01-color-switcher.115460e4.js.map