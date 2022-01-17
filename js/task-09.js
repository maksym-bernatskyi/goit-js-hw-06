function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

function onButtonClick() {
  textColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

buttonChangeColor.addEventListener('click', onButtonClick);