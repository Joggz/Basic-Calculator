const buttons = document.querySelectorAll('.btn-number, .btn-operator');
const display = document.querySelector('.display');

let displayValue = '';
buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        const btnValue = btn.getAttribute('data-num');
        displayValue += btnValue;
        display.textContent = displayValue;
    })
})