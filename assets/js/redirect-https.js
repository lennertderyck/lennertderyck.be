console.log("redirect-https.js script running");

var loc = window.location.href;

if (window.location.href.startsWith("http://lennertderyck.be")) {
    console.log('    ' + "This page is not safe");
    var safeLoc = loc.replace("http", "https");
    window.location.replace(safeLoc);
}

console.log('    ' + 'location is ' + window.location.href);

if (window.location.href.startsWith("http://127.0.0.1") == false) {
    if (window!=window.top) {
        console.log('    ' + 'URL does not start with https://lennertderyck.be');
        var html = document.getElementById('html');
        html.classList.add('embedded');
    } else {
        console.log('    ' + 'URL begins with https://lennertderyck.be');
    }
} else {
    console.log('    ' + 'URL not checked because site runs local')
}