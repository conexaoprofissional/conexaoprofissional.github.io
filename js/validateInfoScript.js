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

function checkName() {
    let name = document.getElementById("name").value;

    if (isNameValid(name)) {
        nameError = false;
        rightInput('name');
        return;
    }

    if (isEmpty('name')) {
        putTagBack('name', 'Nome Completo');
    }

    nameError = true;
    wrongInput('name');
}


function checkCourse() {
    let selectedCourse = document.getElementById("course");
    if (selectedCourse.value == "error") {
        courseError = true;
        wrongInput("course");
        return;
    }
    courseError = false;
    rightInput("course");
}

function checkPhone() {
    if (isEmpty("telefone")) {
        putTagBack('telefone', 'Telefone com DDD');
        phoneError = true;
        wrongInput("telefone");
        return;
    }

    if (isPhoneValid() === false) {
        phoneError = true;
        wrongInput("telefone");
        return;
    }

    phoneError = false;
    rightInput("telefone");

    changePhone();
}

function hasPhoneRightDesign(phone) {
    let hyphen = /[-]/g;
    let hasHyphen = hyphen.test(oldPhone);

    let openParentheses = /[(]/g;

    let closeParentheses = /[)]/g;
}

function changePhone() {
    if (isPhoneValid()) {
        let oldPhone = document.getElementById("telefone").value;

        let newPhone = "";

        if (oldPhone.length == 10) {
            newPhone = "(" + oldPhone[0] + oldPhone[1] + ")";
            newPhone += oldPhone.slice(2, 6) + "-" + oldPhone.slice(6, 10);
            document.getElementById("telefone").value = newPhone;
            return;
        }

        if (oldPhone.length == 11) {
            newPhone = "(" + oldPhone[0] + oldPhone[1] + ")";
            newPhone += oldPhone.slice(2, 7) + "-" + oldPhone.slice(7, 11);
            document.getElementById("telefone").value = newPhone;
            return;
        }


        
    }
}

function checkEmail() {
    if (isEmpty("email")) {
        putTagBack('email', 'E-mail');
        emailError = true;
        wrongInput("email");
        return;
    }

    if (isEmailValid() === false) {
        emailError = true;
        wrongInput("email");
        return;
    }

    emailError = false;
    rightInput("email");
}

function checkCity() {
    if (isEmpty("cidade")) {
        putTagBack('cidade', 'Cidade');
        cityError = true;
        wrongInput("cidade");
        return;
    }

    if (isCityValid() === false) { 
        cityError = true;
        wrongInput("cidade");
        return;
    }

    cityError = false;
    rightInput("cidade");
}

function isPhoneValid() {
    let phone = document.getElementById("telefone").value;

    return (!isTextEqual(phone, "Telefone com DDD")
        && phone.length >= 10 && phone.length < 15 );
}

function isEmailValid() {
    let email = document.getElementById("email").value;

    let dot = /[.]/g;
    let hasDot = dot.test(email);

    let atSign = /[@]/g;
    let hasAtSign = atSign.test(email);
    
    return (!isTextEqual(email, "E-mail")
        && hasDot && hasAtSign);
}

function isCityValid() {
    let city = document.getElementById("cidade").value;
    return !isTextEqual(city, "Cidade");
}

function isEmpty(id) {
    let text = document.getElementById(id).value;
    if (text.length <= 0) {
        return true;
    }
    return false;
}