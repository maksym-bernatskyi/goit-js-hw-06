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
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}