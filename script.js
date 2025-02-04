const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const generalQuery = document.getElementById('generalQuery').checked;
    const supportQuery = document.getElementById('supportQuery').checked;
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const queryTypeError = document.getElementById('queryTypeError');
    const messageError = document.getElementById('messageError');
    const consentError = document.getElementById('consentError');

    let isValid = true;

    // First name validation
    if (firstName === '') {
        firstNameError.style.visibility = 'visible';
        document.querySelector('#firstName').style.border = '1px solid var(--red)';
        isValid = false;
    } else {
        firstNameError.style.visibility = 'hidden';
        document.querySelector('#firstName').style.border = '1px solid var(--grey-900)';
    }

    // Last name validation
    if (lastName === '') {
        lastNameError.style.visibility = 'visible';
        document.querySelector('#lastName').style.border = '1px solid var(--red)';
        isValid = false;
    } else {
        lastNameError.style.visibility = 'hidden';
        document.querySelector('#lastName').style.border = '1px solid var(--grey-900)';
    }

    // Email validation
    if (!validateEmail(email)) {
        emailError.style.visibility = 'visible';
        document.querySelector('#email').style.border = '1px solid var(--red)';
        isValid = false;
    } else {
        emailError.style.visibility = 'hidden';
        document.querySelector('#email').style.border = '1px solid var(--grey-900)';
    }

    // Query type validation
    if (!generalQuery && !supportQuery) {
        queryTypeError.style.visibility = 'visible';
        isValid = false;
    } else {
        queryTypeError.style.visibility = 'hidden';
    }

    // Message validation
    if (message === '') {
        messageError.style.visibility = 'visible';
        document.querySelector('#message').style.border = '1px solid var(--red)';
        isValid = false;
    } else {
        messageError.style.visibility = 'hidden';
        document.querySelector('#message').style.border = '1px solid var(--grey-900)';
    }

    // Consent validation
    if (!consent) {
        consentError.style.visibility = 'visible';
        isValid = false;
    } else {
        consentError.style.visibility = 'hidden';
    }

    // Form validation
    if(isValid) {
        document.querySelector('#success-message').style.visibility = 'visible';
        setTimeout(() => {
            document.querySelector('#success-message').style.visibility = 'hidden';
        }, 2000);
        form.reset();
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}








