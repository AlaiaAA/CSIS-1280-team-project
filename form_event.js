function submissionHandler() {


    var fnameElem = document.getElementById('fname');
    var lnameElem = document.getElementById('lname');
    var emailElem = document.getElementById('email');
    var mobileElem = document.getElementById('mobile');
    var issueElem = document.getElementById('issue');
    var dateElem = document.getElementById('date');

    var contactForm = document.querySelector('.contact');
    var fullName = fnameElem.value + ' ' + lnameElem.value;
    var thanks = document.querySelector('.thanks');
    var inputName = document.querySelector('#inputName');
    inputName.innerHTML = fullName;
    console.log(fullName.value);
    contactForm.style['display'] = 'none';
    thanks.style['display'] = 'block';
    return false;
}

var totalLen = 300;
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#issue').addEventListener("input", function () {
        var inputLen = this.value.length;
        var remainLen = totalLen - inputLen;
        const wordCntSec = document.querySelector('.wordCnt');
        wordCntSec.innerHTML = remainLen;
    });
});