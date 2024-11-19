const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
      return;
    }

    if (value === '=') {
      if (currentInput && previousInput && operator) {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        display.textContent = currentInput;
        previousInput = '';
        operator = '';
      }
      return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        previousInput = currentInput;
        operator = value;
        currentInput = '';
      }
      return;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});