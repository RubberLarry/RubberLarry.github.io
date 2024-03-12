let captchaChecked = false;

function beforeSubmit(event) {
    if(captchaChecked) {

    } else {
        alert('Please check the reCAPTCHA box');
        event.preventDefault();
    }
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") { 
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value); 
        elems["ts"] = JSON.stringify(new Date().getTime()); 
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 

setInterval(timestamp, 500);

function captchaSuccess() {
    captchaChecked = true;
}