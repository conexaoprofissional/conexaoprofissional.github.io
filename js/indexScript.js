var courseError = true;
var nameError = true;
var emailError = true;
var phoneError = true;
var cityError = true;

function eraseText(id, previousValue) {
    if (document.getElementById(id)
        .value == previousValue) { 
        document.getElementById(id).value = "";
    }
}

function putTagBack(id, tag) {
    document.getElementById(id).value = tag;
}

function getCourseValue(id) {
    if (courseError === false) {
        let selectedCourse = document.getElementById(id);
        return selectedCourse.value;
    }
}
