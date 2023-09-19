
document.addEventListener('DOMContentLoaded', function() {
  let currentInput = '';
  let previousInput = '';
  let operator = '';

  const display = document.querySelector('.calculator-display');
  const buttons = document.querySelectorAll('.calculator-button');

  function updateDisplay() {
    display.textContent = currentInput;
  }

  function handleNumberClick(num) {
    currentInput += num;
    updateDisplay();  
  }

  function handleOperatorClick(op){
    if (currentInput !== ''){
      if (previousInput !== ''){
        calculate();
      }
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    }
  };

  function calculate(){
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator){
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'X':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default: 
        return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
  }

  function handleClear() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();  
  };

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const value = button.textContent;
      
      if (button.classList.contains('number')) {
        handleNumberClick(value);
      } else if (button.classList.contains('operator')) {
        if(value === 'C'){
          handleClear();
        } else if(value === '='){
          calculate();
        } else { 
          handleOperatorClick(value);
        }
      }
    });
  });
});