const form = document.querySelector("#wrapper-contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameErr");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectErr");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailErr");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressErr");

function validateForm(event) {
    event.preventDefault();

        if (validateLength(fullName.value, 0) === true) {
            fullNameError.style.display = "none";
        } else {
            fullNameError.style.display = "block";
        }

        if (validateLength(subject.value, 10) === true) {
            subjectError.style.display = "none";
        } else {
            subjectError.style.display = "block";
        }

        if (validateEmail(email.value) === true) {
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
        }

        if (validateLength(address.value) === 25) {
            addressError.style.display = "none";
        } else {
            addressError.style.display = "block";
        }

}

function validateLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validPattern = regEx.test(email);
    return validPattern;
}

form.addEventListener("submit", validateForm);