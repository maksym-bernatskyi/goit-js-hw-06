const elements = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

function onChangeInput(event) {
    if (elements.input.value === '') {
        return elements.span.textContent = 'Anonymous';
    }
    elements.span.textContent = event.currentTarget.value;
}

elements.input.addEventListener('input', onChangeInput);