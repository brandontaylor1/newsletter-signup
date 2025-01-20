const form = document.querySelector('form');


var validator = new Validator({
    form: document.getElementById('form'),
    rules: {
      email: {
        validate: (val) => val ? '' : 'Required!',
      }
    }
  });
  
  validator.form.onsubmit = (e) => {
    e.preventDefault();
    const values = validator.getValues();
    console.log(values);
  }
  
  validator.form.onreset = (evn) => {
    const data = validator.reset();
    console.log(data);
  }



// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);
//     console.log(data);
//     form.reset();
//     window.location.href = "success.html";

// }

// form.addEventListener('submit', handleSubmit);




