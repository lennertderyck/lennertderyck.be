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