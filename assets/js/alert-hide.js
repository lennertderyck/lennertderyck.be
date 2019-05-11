function logState() {
    console.log("alert-hide.js script running");
}

window.onload = logState();

function hideAlert(alert) {
    document.getElementById(alert).style.display = "none";

    var alertCookie = getCookie("hide-alert");
    // var slctAlert = document.getElementById(alert);

    if (alertCookie != "") {
        // cookie exists
        createCookie('hide-alert',alertCookie + ', ' + alert,500);
        console.log('    ' + 'alertCookie exists');
        console.log('    ' + 'alertCookie output = ' + alertCookie);
    } else {
        // cookie not existing
        createCookie('hide-alert',alert,500)
        console.log('    ' + 'alertCookie is made');
        console.log('    ' + 'alertCookie output = ' + alertCookie);
    }
}