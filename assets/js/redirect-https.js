var loc = window.location.href;

if (window.location.href.startsWith("http://lennertderyck.be")) {
    console.log("This page is not safe");
    var safeLoc = loc.replace("http", "https");
    window.location.replace(safeLoc);
}