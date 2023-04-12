function submissionHandler() {


    let validateRes = validateData(fnameElem, lnameElem, emailElem, mobileElem, issueElem, dateElem);
    if (!validateRes) {
        return false;
    } else {
        
    }
    return false;
}

let totalLen = 300;
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#issue').addEventListener("input", function () {
        let inputLen = this.value.length;
        let remainLen = totalLen - inputLen;
        const wordCntSec = document.querySelector('.wordCnt');
        wordCntSec.innerHTML = remainLen;
    });
});

function validateData() {
    let flag = true;
    let fnameElem = document.getElementById('fname');
    let lnameElem = document.getElementById('lname');
    let emailElem = document.getElementById('email');
    let mobileElem = document.getElementById('mobile');
    let issueElem = document.getElementById('issue');
    let dateElem = document.getElementById('date');
    // validate name
    if (fnameElem == undefined || fnameElem.value.trim() == '') {
        flag = false;
        document.querySelector('#overlay').style['display'] = 'block';
        document.querySelector('.popup_content').innerHTML = 'Please enter valid first name.'
        return flag;
    }
    if (lnameElem == undefined || lnameElem.value.trim() == '') {
        flag = false;
        document.querySelector('#overlay').style['display'] = 'block';
        document.querySelector('.popup_content').innerHTML = 'Please enter valid last name.'
        return flag;
    }
    // validate email
    if (emailElem == undefined || emailElem.value.trim() == '') {
        flag = false;
        document.querySelector('#overlay').style['display'] = 'block';
        document.querySelector('.popup_content').innerHTML = 'Please enter valid email.'
        return flag;
    } else {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        flag = re.test(emailElem.value);
        if (!flag) {
            document.querySelector('#overlay').style['display'] = 'block';
            document.querySelector('.popup_content').innerHTML = 'Please enter valid email.'
            return flag;
        }
    }
    // validate mobile
    if (mobileElem == undefined || mobileElem.value.trim() == '') {
        flag = false;
        document.querySelector('#overlay').style['display'] = 'block';
        document.querySelector('.popup_content').innerHTML = 'Please enter valid mobile no..'
        return flag;
    } else {
        var re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        flag = re.test(mobileElem.value);
        if (!flag) {
            document.querySelector('#overlay').style['display'] = 'block';
            document.querySelector('.popup_content').innerHTML = 'Please enter valid mobile no..'
            return flag;
        }
    }

    let contactForm = document.querySelector('.contact');
    let fullName = fnameElem.value + ' ' + lnameElem.value;
    let thanks = document.querySelector('.thanks');
    let inputName = document.querySelector('#inputName');
    inputName.innerHTML = fullName;
    console.log(fullName.value);
    contactForm.style['display'] = 'none';
    thanks.style['display'] = 'block';
    return false;
}

function hidePopup() {
    document.querySelector('#overlay').style['display'] = 'none';
}