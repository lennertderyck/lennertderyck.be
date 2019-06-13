var humanCheck, notifHumanCheck, formContact, apiToken, btnFormSubmit, humanCheckCookie;

humanCheck = document.getElementById('humanCheck');
humanCheckCookie = getCookie('hmn');
formContact = document.getElementById('formContact');

function areYouHumanCheck() {
    btnFormSubmit = document.getElementById('btnFormSubmit');
    notifHumanCheck = document.getElementById('notifHumanCheck');
    formContact = document.getElementById('formContact');
    if (humanCheck.checked != true) {
        apiToken = 'https://getsimpleform.com/messages?form_api_token=96062ca48bf40b13aa97da2d537ce2af';
        console.log('This user is human');
        formContact.setAttribute('action', apiToken);
        notifHumanCheck.style.display = "none";
        btnFormSubmit.classList.remove('disabled');
    } else {
        console.log('This user isnt human')
        formContact.setAttribute('action', ' ');
        notifHumanCheck.style.display = "inline-block";
        btnFormSubmit.classList.add('disabled');
        createCookie('hmn', 'false', 1000);
    }
}

if (humanCheckCookie = "false") {
    humanCheck = document.getElementById('humanCheck');
    btnFormSubmit = document.getElementById('btnFormSubmit');
    notifHumanCheck = document.getElementById('notifHumanCheck');
    formContact = document.getElementById('formContact');
    console.log('This user is registered inhuman')
    formContact.setAttribute('action', ' ');
    notifHumanCheck.style.display = "inline-block";
    btnFormSubmit.classList.add('disabled');
    humanCheck.checked = true;
    // humanCheck.click();
}

window.onload = areYouHumanCheck();

