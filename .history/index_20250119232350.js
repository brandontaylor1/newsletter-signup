

const form = document.querySelector('form');

var validator = new Validator({
    form: document.getElementById('form'),
    rules: {
      email: {
        validate: (val) => val ? '' : 'Valid Email Required!',
      }
    }
  });
  
  validator.form.onsubmit = (e) => {
    e.preventDefault();
    const errors = validator.validate();
    if (Object.keys(errors).length > 0) {
        // Display error messages
        for (const [field, message] of Object.entries(errors)) {
            const errorElement = document.querySelector(`#${field}-error`);
            if (errorElement) {
                errorElement.textContent = message;
            }
        }
    } else {
        // No errors, proceed with form submission
        const values = validator.getValues();
        console.log(values);
        form.reset();
        window.location.href = 'success.html';
    }
};
  
validator.form.onreset = (evn) => {
    const data = validator.reset();
    console.log(data);
    // Clear error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
};


// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);
//     console.log(data);
//     form.reset();
//     window.location.href = "success.html";

// }

// form.addEventListener('submit', handleSubmit);




