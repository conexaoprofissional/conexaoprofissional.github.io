function isTextEqual(text1, text2) {
    if (text1 == text2) {
        return true;
    }

    return false;
}

function wrongInput(id) {
    document.getElementById(id).classList.add("error");
}

function rightInput(id) {
    document.getElementById(id).classList.remove("error");
}

function isNameValid(name) {
    if (isTextEqual(name, "Nome Completo")) {
        return false;
    }

    if (isEmpty('name')) {
        return false;
    }

    let specials = /[^A-Za-z 0-9]/g;
    let result = specials.test(name);

    return !result;
}

function checkName(id) {
    let name = document.getElementById(id).value;

    if (isNameValid(name)) {
        nameError = false;
        rightInput(id);
        return;
    }

    if (isEmpty(id)) {
        putTagBack(id, 'Nome Completo');
    }

    nameError = true;
    wrongInput(id);
}


function checkCourse(id) {
    let selectedCourse = document.getElementById(id);
    if (selectedCourse.value == "error") {
        courseError = true;
        wrongInput(id);
        return;
    }
    courseError = false;
    rightInput(id);
}

function checkPhone(id) {
    if (isEmpty(id)) {
        putTagBack(id, 'Telefone com DDD');
        phoneError = true;
        wrongInput(id);
        return;
    }

    if (isPhoneValid(id) === false) {
        phoneError = true;
        wrongInput(id);
        return;
    }

    phoneError = false;
    rightInput(id);

    changePhone(id);
}

function changePhone(id) {
    if (isPhoneValid(id)) {
        let oldPhone = document.getElementById(id).value;

        let newPhone = "";

        if (oldPhone.length == 10) {
            newPhone = "(" + oldPhone[0] + oldPhone[1] + ")";
            newPhone += oldPhone.slice(2, 6) + "-" + oldPhone.slice(6, 10);
            document.getElementById(id).value = newPhone;
            return;
        }

        if (oldPhone.length == 11) {
            newPhone = "(" + oldPhone[0] + oldPhone[1] + ")";
            newPhone += oldPhone.slice(2, 7) + "-" + oldPhone.slice(7, 11);
            document.getElementById(id).value = newPhone;
            return;
        }
    }
}

function checkEmail(id) {
    if (isEmpty(id)) {
        putTagBack(id, 'E-mail');
        emailError = true;
        wrongInput(id);
        return;
    }

    if (isEmailValid(id) === false) {
        emailError = true;
        wrongInput(id);
        return;
    }

    emailError = false;
    rightInput(id);
}

function checkCity(id) {
    if (isEmpty(id)) {
        putTagBack(id, 'Cidade');
        cityError = true;
        wrongInput(id);
        return;
    }

    if (isCityValid(id) === false) { 
        cityError = true;
        wrongInput(id);
        return;
    }

    cityError = false;
    rightInput(id);
}

function isPhoneValid(id) {
    let phone = document.getElementById(id).value;

    return (!isTextEqual(phone, "Telefone com DDD")
        && phone.length >= 10 && phone.length < 15 );
}

function isEmailValid(id) {
    let email = document.getElementById(id).value;

    let dot = /[.]/g;
    let hasDot = dot.test(email);

    let atSign = /[@]/g;
    let hasAtSign = atSign.test(email);
    
    return (!isTextEqual(email, "E-mail")
        && hasDot && hasAtSign);
}

function isCityValid(id) {
    let city = document.getElementById(id).value;
    return !isTextEqual(city, "Cidade");
}

function isEmpty(id) {
    let text = document.getElementById(id).value;
    if (text.length <= 0) {
        return true;
    }
    return false;
}
