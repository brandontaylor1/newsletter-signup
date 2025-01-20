const form = document.querySelector('form');

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    form.reset();
    
}

form.addEventListener('submit', handleSubmit);