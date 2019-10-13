console.log("main-crtl.js script running");

if (window.location.href.startsWith("http://127.0.0.1") == false) {
    if (window!=window.top) {
        var siteContent = document.getElementById('site-content');
        siteContent.outerHTML = " ";
        siteContent.innerHTML = " ";
        console.log('    ' + '#site-content content removed');
    }
}

var menuCollapse = document.getElementById("NavMainCollapse");
var btnNavMainCollapse = document.getElementById("btnNavMainCollapse");
var body = document.getElementById("body");
var titleOrig = document.title;

/* IF RUNS LOCAL */

if (window.location.href.startsWith("http://127.0.0.1")) {
    console.log('    ' + 'This page runs local: ' + titleOrig);
    document.title = "[local] " + titleOrig;
}

/* * */

function checkMenuOpen() {
    body.classList.toggle("no-scroll");
}

/* FILTER PORTFOLIO */

function filterPortfolio(tag) {
    console.log(tag);
    var cards = document.getElementsByClassName("portfolio-item");
    var portfolio = document.getElementById("portfolio");
    var selectedNumber = document.querySelectorAll('.filter-show').length;
    var msgNotFound = document.getElementById("projects-msg-not-found");
    var msgMore = document.getElementById("projects-msg-more");

    var selected = document.querySelectorAll('.filter-show');
    for (var i = 0; i < selected.length; i++) {
        selected[i].classList.remove('filter-show');
    }

    if (tag != "All") {
        portfolio.classList.add("filtered");
        cards[0].classList.remove("filter-show")
        // cards.classList.remove("filter-show");
    
        var selected = document.querySelectorAll('.' + tag);
        for (var i = 0; i < selected.length; i++) {
            selected[i].classList.add('filter-show');
        }
    }
    
    if (tag == "All") {
        portfolio.classList.remove("filtered");
        cards[0].classList.remove("filter-show")
    }
}

/* MODAL CLIENT FILES FORWARD */

    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    var paramCurrWindow = getQueryVariable("storagecode");
    console.log('Url parameters ' + paramCurrWindow);


    var inputClientfilesCode = document.getElementById("inputClientfilesCode").value;
    var cookieClientfilesCode = getCookie('client-CFCode');
    var btnTestClientfilesCodeExists = document.getElementById("btnTestClientfilesCodeExists");
    var btnTestClientfilesCodeNotExisting = document.getElementById("btnTestClientfilesCodeNotExisting");
    var navTestClientfilesCodeNotExisting = document.getElementById('navTestClientfilesCodeNotExisting');
    var navTestClientfilesCodeExists = document.getElementById('navTestClientfilesCodeExists');

    if (cookieClientfilesCode != "") {
        // btnTestClientfilesCodeNotExisting.outerHTML = "";
        btnTestClientfilesCodeNotExisting.style.display = "none"
        navTestClientfilesCodeNotExisting.style.display = "none"
        document.getElementById("inputClientfilesCode").value = cookieClientfilesCode;
    } else {
        // btnTestClientfilesCodeExists.outerHTML = "";
        btnTestClientfilesCodeExists.style.display = "none"
        navTestClientfilesCodeExists.style.display = "none"
    }

    if (window.location.href.includes("?storagecode")) {
        $('#modalClientfiles').modal('show');
    }

    function saveClientfilesCode() {
        var inputClientfilesCode = document.getElementById("inputClientfilesCode").value;
        createCookie('client-CFCode',inputClientfilesCode,1000);
        // window.location.replace("https://storage.lennertderyck.be/s/" + inputClientfilesCode)
        var winStack = window.open("https://storage.lennertderyck.be/s/" + inputClientfilesCode, '_blank');
        winStack.focus();
        location.reload();
    }

    function testClientfilesCode() {
        var inputClientfilesCode = document.getElementById("inputClientfilesCode").value;
        var cookieClientfilesCode = getCookie('client-CFCode');
        var modalClientfiles = document.getElementById("modalClientfiles");

        if (cookieClientfilesCode != "") {
            // window.location.href = "http://www.w3schools.com" + "/storage";
            // window.location.replace("https://storage.lennertderyck.be/s/" + cookieClientfilesCode)
            var winStack = window.open("https://storage.lennertderyck.be/s/" + cookieClientfilesCode, '_blank');
            winStack.focus();
            console.log("client-CFCode cookie exists");
        } else {
            $('#modalClientfiles').modal('show')
            // modalClientfiles.classList.add('show');
            console.log("client-CFCode cookie not existing");
        }
    }

    inputClientfilesCode.value = paramCurrWindow;

/* COLOR SELECTOR */

    // https://www.npmjs.com/package/fast-average-color

    var container = document.querySelector('#navFloatContainer');
    var colorBased = document.querySelectorAll('.color-based')

    window.addEventListener('load', function() {
        var
            fac = new FastAverageColor(),
            // container = document.querySelector('#projectFtImage'),
            color = fac.getColor(document.querySelector('#projectFtImage'));

        container.style.backgroundColor = color.rgb;
        //colorBased.style.color = color.isDark ? '#fff' : '#000';

        console.log(color);
    }, false);

/* TEXT DARK */
    // https://www.npmjs.com/package/fast-average-color

    // var container = document.querySelector('#navFloatContainer');
    // var colorBased = document.querySelectorAll('.color-based')

    if (window.location.href.includes("/blog/")) {
        window.addEventListener('load', function() {
            var
                fac = new FastAverageColor(),
                // container = document.querySelector('#projectFtImage'),
                color = fac.getColor(document.querySelector('#projectFtImage'));
    
            // container.style.backgroundColor = color.rgb;
            // colorBased.style.color = color.isDark ? '#fff' : '#000';
    
            var navMain = document.getElementById('navMain');
    
            if (color.isDark == true) {
                this.console.log("Isdark");
                navMain.classList.add('imgDarkMode');
            } else if (color.isDark == false) {
                this.console.log("Isnotdark")
                navMain.classList.add('imgLightMode');
            }
    
            console.log(color);
        }, false);
    }


/* CUSTOM CONTEXT MENU */
    const menu = document.getElementById('menuContext');
    let menuVisible = false;

    const toggleMenu = command => {
        menu.style.display = command === "show" ? "block" : "none";
        menuVisible = !menuVisible;
    };

    const setPosition = ({ top, left }) => {
        menu.style.left = `${left}px`;
        menu.style.top = `${top}px`;
        toggleMenu("show");
    };

    window.addEventListener("click", e => {
        if(menuVisible)toggleMenu("hide");
        menu.style.top = "unset";
        menu.style.left = "unset";
    });

    window.addEventListener("contextmenu", e => {
    e.preventDefault();
        const origin = {
            left: e.screenX,
            top: e.screenY - 134
    };
        setPosition(origin);
        return false;
    });