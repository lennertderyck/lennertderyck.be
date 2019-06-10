function logState() {
    console.log("cookie-crtl.js script running");
}

window.onload = logState();

var alertCookies = document.getElementById("alertCookies");
var scripts = document.scripts;
var allScripts = document.getElementsByTagName("script");
var cookieStat = getCookie('cookie-stat');
var btnCookieStatus = document.getElementById("cookieStatus");
var googleAnalyics = document.getElementById("googleAnalyics");

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
    window.onload = gaOptout();

    alertCookies.classList.add("d-none");
    // btnCookieStatus.innerHTML = "Cookies toestaan"
    // btnCookieStatus.setAttribute('onclick', 'cookieConsent()');
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

// GOOGLE ANALYTICS OPT OUT
// Set to the same value as the web property used on the site
var gaProperty = 'UA-140323499-1';

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[disableStr] = true;
}
