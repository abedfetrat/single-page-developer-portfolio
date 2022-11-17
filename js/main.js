const form = document.getElementById('contact-form');

const nameField = document.getElementById('contact-form-name');
const emailField = document.getElementById('contact-form-email');
const messageField = document.getElementById('contact-form-message');

nameField.addEventListener('input', validateField);
emailField.addEventListener('input', validateField);
messageField.addEventListener('input', validateField);

function validateField({ target }) {
    if (target.validity.valid) {
        target.classList.remove('error');
        target.classList.add('success');
    } else {
        target.classList.remove('success');
        target.classList.add('error');
    }
}

function validateForm() {
    return nameField.validity.valid && emailField.validity.valid &&
        messageField.validity.valid;
}

function resetForm() {
    nameField.classList.remove('success');
    nameField.value = '';

    emailField.classList.remove('success');
    emailField.value = '';

    messageField.classList.remove('success');
    messageField.value = '';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm()) {
        //Todo: submit form
        alert("Thank you for the message! I'll get back to you asap.");
        resetForm();
    }
});