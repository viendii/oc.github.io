// ==UserScript==
// @name         OCio Oozium 
// @namespace    oc.oozium.v1[Yourname].[Your version]
// @version      1.0.0.
// @description  Testing OGARio Script
// @author       OGARio Devs
// @match        *://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      http://viendii.github.io/oc.github.io/
// ==/UserScript==


// Check location
if (location.host === "agar.io" && location.pathname === "/") {
    location.href = "https://agar.io/ogario" + location.hash;
    return;
}

// Inject script
window.stop();
document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method : "GET",
    url : "http://viendii.github.io/oc.github.io/oc.html",
    onload : function(e) {
        document.open();
        document.write(e.responseText);
        document.close();
    }
});
