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

/* var rgb = getAverageRGB(document.getElementById('projectFtImage'));
// document.body.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
document.getElementById("navFloatContainer").style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';

function getAverageRGB(imgEl) {

var blockSize = 5, // only visit every 5 pixels
    defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = -4,
    length,
    rgb = {r:0,g:0,b:0},
    count = 0;
    
if (!context) {
    return defaultRGB;
}

height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

context.drawImage(imgEl, 0, 0);

try {
    data = context.getImageData(0, 0, width, height);
} catch(e) {
   alert('x');
    return defaultRGB;
} */

/* length = data.data.length;

while ( (i += blockSize * 4) < length ) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i+1];
    rgb.b += data.data[i+2];
}

// ~~ used to floor values
rgb.r = ~~(rgb.r/count);
rgb.g = ~~(rgb.g/count);
rgb.b = ~~(rgb.b/count);

return rgb;

} */

/* COLOR SELECTOR */

// var sourceImage = document.getElementById('projectFtImage');

myImage = $('#projectFtImage');
dominantColor = getDominantColor(myImage);

console.log('dominant color is ' + dominantColor)