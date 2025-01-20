const form = document.querySelector('form');

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    form.reset();
    window.location.href = "success.html";

}

form.addEventListener('submit', handleSubmit);