const switchFontSize = document.querySelector('#font-size-control');
const switchLabel = document.querySelector('#text');

function onChangeFontSize(event) {
    const inputValue = event.currentTarget.value;
    switchLabel.style.fontSize = `${inputValue}px`; 
}

switchFontSize.addEventListener('change', onChangeFontSize);