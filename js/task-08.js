const form = document.querySelector('.login-form');

form.addEventListener('submit', dataSubmit);

function dataSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('Все поля должны быть заполнены!')
    }
    
    const formData = {
        email: email.value,
        password: password.value,
    }
    
    console.log(formData);
    event.currentTarget.reset();
}