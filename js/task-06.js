const input = document.querySelector('#validation-input');
console.log(input);

function onInputBlur(event) {
    const inputDataLength = input.getAttribute('data-length');
    const inputValue = event.currentTarget.value.length;

  if (inputValue != inputDataLength) {
    input.classList.remove('valid')
    return input.classList.add('invalid')
  }
    input.classList.remove('invalid')
    return input.classList.add('valid') 
}

input.addEventListener('blur', onInputBlur);