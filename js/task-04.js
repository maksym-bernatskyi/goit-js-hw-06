const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

const handleDecrementBtnClick = () => {
    counter.textContent = --counterValue;
}

decrementBtn.addEventListener('click', handleDecrementBtnClick);

const handleIncrementBtnClick = () => {
    counter.textContent = ++counterValue;
}

incrementBtn.addEventListener('click', handleIncrementBtnClick);