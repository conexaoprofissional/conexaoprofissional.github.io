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

function getCourseValue() {
    if (courseError === false) {
        let selectedCourse = document.getElementById("course");
        return selectedCourse.value;
    }
}
