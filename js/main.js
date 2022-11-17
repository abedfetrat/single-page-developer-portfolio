const form = document.getElementById('contact-form');

const nameField = document.getElementById('contact-form-name');
const emailField = document.getElementById('contact-form-email');
const messageField = document.getElementById('contact-form-message');

nameField.addEventListener('input', e => validateField(e.target));
emailField.addEventListener('input', e => validateField(e.target));
messageField.addEventListener('input', e => validateField(e.target));

function validateField(field) {
    if (field.validity.valid) {
        field.classList.remove('error');
        field.classList.add('success');
        return true;
    } else {
        field.classList.remove('success');
        field.classList.add('error');
        return false;
    }
}

function validateForm() {
    const validName = validateField(nameField);
    const validEmail = validateField(emailField);
    const validMessage = validateField(messageField);
    return validName && validEmail && validMessage;
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