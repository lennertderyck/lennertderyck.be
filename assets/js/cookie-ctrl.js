function logState() {
    console.log("cookie-crtl.js script running");
}

window.onload = logState();

var alertCookies = document.getElementById("alertCookies");
var scripts = document.scripts;
var allScripts = document.getElementsByTagName("script");
var cookieStat = getCookie('cookie-stat')
var btnCookieStatus = document.getElementById("cookieStatus");

if (cookieStat == "consent") {
    console.log('    ' + 'Cookies are accepted');
    alertCookies.classList.add("d-none");
    btnCookieStatus.innerHTML = "Cookies blokkeren"
    btnCookieStatus.setAttribute('onclick', 'cookieBlock()');
} else if (cookieStat == "block") {
    console.log('    ' + 'Cookies are blocked');
    var allScript = document.querySelectorAll("script[src*='https://']:not([src*='lennertderyck'])");
    for (var i = 0; i < allScript.length; i++){
        // allScript[i].setAttribute("src", "test");
        allScript[i].outerHTML = "";
    }
    alertCookies.classList.add("d-none");
    btnCookieStatus.innerHTML = "Cookies toestaan"
    btnCookieStatus.setAttribute('onclick', 'cookieConsent()');
} else {
    alertCookies.classList.add("show");
    btnCookieStatus.innerHTML = "Keuze niet mogelijk";
    btnCookieStatus.classList.add("disabled");
}

function cookieConsent() {
    createCookie('cookie-stat','consent',1000);
    if (cookieStat != "block") {
        alertCookies.classList.add("fadeOutRight");
        alertCookies.classList.add("d-none");
    }
    btnCookieStatus.innerHTML = "Cookies blokkeren";
    btnCookieStatus.setAttribute('onclick', 'cookieBlock()');
}

function cookieBlock() {
    createCookie('cookie-stat','block',1000);
    if (cookieStat != "consent") {
        alertCookies.classList.add("fadeOutRight");
        alertCookies.classList.add("d-none");
    }
    btnCookieStatus.innerHTML = "Cookies toestaan"
    btnCookieStatus.setAttribute('onclick', 'cookieConsent()');
}
