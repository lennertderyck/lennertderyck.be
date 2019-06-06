var menuCollapse = document.getElementById("NavMainCollapse");
var btnNavMainCollapse = document.getElementById("btnNavMainCollapse");
var body = document.getElementById("body");

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

/* CLIENT STACK FORWARD */

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