const screenEl = document.getElementById('screen');
const keysEl = document.querySelectorAll('.key');

keysEl.forEach(key => {
    key.addEventListener('click', () => {
        if(key.textContent === '=') {
            screenEl.value = eval(screenEl.value);

        } else if(key.textContent === 'reset') {
            screenEl.value = '';

        } else if(key.textContent === 'del') {

            screenEl.value = screenEl.value.slice(0 , screenEl.value.length - 1)

        } else {
            screenEl.value += key.textContent;
        }
    })
})