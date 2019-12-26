const buttons = document.querySelectorAll('.btn-number, .btn-operator');
const display = document.querySelector('.display');
const equalsButton = document.querySelector('.btn-equals')
const clearButton = document.querySelector('.btn-clear');
const clearBack = document.querySelector('.btn-bck')
console.log(clearBack)
let displayValue = '';
buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        const btnValue = btn.getAttribute('data-num');
        displayValue += btnValue;
        display.textContent = displayValue;
       
      })
      
})

equalsButton.addEventListener('click', () => {
    // alert('clicked ' + eval(displayValue))
    displayValue = eval(displayValue);
    display.textContent = displayValue
})

clearButton.addEventListener('click', () => {
  displayValue = ''
  display.textContent = displayValue
})

clearBack.addEventListener('click', function back() {
  console.log(displayValue)
  newStr = displayValue;
  console.log(newStr)
  newArr = Array.from(newStr)
  console.log(newArr);
  updatedArr = newArr.splice(-1);
  console.log(updatedArr)
  console.log(newArr)
  console.log(newArr.join(''))
  displayValue = newArr.join('');
  console.log(displayValue)
  display.textContent = displayValue
  
})
