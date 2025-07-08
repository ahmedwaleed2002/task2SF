document.addEventListener('DOMContentLoaded', () => {
    const resultInput = document.getElementById('result');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');
    const decimalButton = document.querySelector('.decimal');
    
    let currentInput = '';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;
    
    // Function to update the display
    function updateDisplay() {
        resultInput.value = currentInput || '0';
    }
    
    // Function to handle number button clicks
    function inputDigit(digit) {
        if (waitingForSecondOperand) {
            currentInput = digit;
            waitingForSecondOperand = false;
        } else {
            // Avoid multiple leading zeros
            currentInput = currentInput === '0' ? digit : currentInput + digit;
        }
        updateDisplay();
    }
    
    // Function to handle decimal point
    function inputDecimal() {
        // If we're waiting for the second operand, start with '0.'
        if (waitingForSecondOperand) {
            currentInput = '0.';
            waitingForSecondOperand = false;
            updateDisplay();
            return;
        }
        
        // Only add decimal if it doesn't already exist
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    }
    
    // Function to handle operators
    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);
        
        // If we already have an operator but the user selects another one,
        // update the operator without performing a calculation
        if (operator && waitingForSecondOperand) {
            operator = nextOperator;
            return;
        }
        
        // If this is the first operand, just save it
        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            // If we already have a first operand and an operator, perform the calculation
            performCalculation();
        }
        
        waitingForSecondOperand = true;
        operator = nextOperator;
    }
    
    // Function to perform calculation
    function performCalculation() {
        const secondOperand = parseFloat(currentInput);
        
        if (isNaN(firstOperand) || isNaN(secondOperand)) return;
        
        // Send calculation to the server
        fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                num1: firstOperand,
                num2: secondOperand,
                operation: getOperationName(operator)
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                currentInput = 'Error';
            } else {
                currentInput = String(data.result);
                firstOperand = data.result;
            }
            updateDisplay();
        })
        .catch(error => {
            console.error('Error:', error);
            currentInput = 'Error';
            updateDisplay();
        });
    }
    
    // Helper function to convert operator symbol to operation name
    function getOperationName(op) {
        switch (op) {
            case '+': return 'add';
            case '-': return 'subtract';
            case '*': return 'multiply';
            case '/': return 'divide';
            default: return '';
        }
    }
    
    // Function to reset the calculator
    function resetCalculator() {
        currentInput = '';
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay();
    }
    
    // Event listeners for number buttons
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            inputDigit(button.getAttribute('data-num'));
        });
    });
    
    // Event listener for decimal button
    decimalButton.addEventListener('click', () => {
        inputDecimal();
    });
    
    // Event listeners for operator buttons
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleOperator(button.getAttribute('data-op'));
        });
    });
    
    // Event listener for equals button
    equalsButton.addEventListener('click', () => {
        if (!operator || waitingForSecondOperand) return;
        performCalculation();
        operator = null;
    });
    
    // Event listener for clear button
    clearButton.addEventListener('click', resetCalculator);
    
    // Initialize display
    updateDisplay();
}); 