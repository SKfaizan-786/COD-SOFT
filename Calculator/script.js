let string = "";
let inputField = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                inputField.value = string;
            } catch (error) {
                inputField.value = 'Error';
                string = '';
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            inputField.value = string;
        } else if (e.target.classList.contains('backspace')) {
            string = string.slice(0, -1);
            inputField.value = string;
        } else if (e.target.innerHTML === '%') {
            string = (parseFloat(string) / 100).toString();
            inputField.value = string;
        } else if (e.target.innerHTML === 'x²') {
            string = Math.pow(parseFloat(string), 2).toString();
            inputField.value = string;
        } else {
            string = string + e.target.innerHTML;
            inputField.value = string;
        }
    });
});