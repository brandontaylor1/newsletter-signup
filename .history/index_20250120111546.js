const form = document.querySelector('form');

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

form.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const emailErrorElement = document.getElementById('email-error');
    let isValid = true;

    if (!validateEmail(email)) {
        emailErrorElement.textContent = 'Valid Email Required!';
        isValid = false;
    } else {
        emailErrorElement.textContent = '';
    }

    if (isValid) {
        const values = { email };
        console.log(values);
        form.reset();
        window.location.href = 'success.html';
    }
};

form.onreset = (evn) => {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
};




