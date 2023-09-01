// Initialize variables
let displayValue = '0';  // Value on the display
let operator = '';       // Current operator (+, -, *, /)
let operand = 0;         // First number for the operation

// Function to update the display
function updateDisplay() {
    document.querySelector('.display').textContent = displayValue;
}

// Function to append characters to the current display value
function appendToDisplay(value) {
    if (value === '.' && displayValue.includes('.')) {
        // Ignore duplicate decimal points
        return;
    }

    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }

    // Limit to 10 characters
    if (displayValue.length > 10) {
        displayValue = displayValue.slice(1);
    }

    updateDisplay();
}

// Function to clear the display and reset operations
function clearDisplay() {
    displayValue = '0';
    operator = '';
    operand = 0;
    updateDisplay();
}

// Function to toggle the sign of the current number
function toggleSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}

// Function to convert the current number to a percentage
function percentage() {
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay();
}

// Function to select an operator
function operate(nextOperator) {
    if (operator !== '') {
        calculateResult();
    }
    operator = nextOperator;
    operand = parseFloat(displayValue);
    displayValue = '0';
}

// Function to calculate the result of the operation
function calculateResult() {
    const currentValue = parseFloat(displayValue);
    switch (operator) {
        case '+':
            displayValue = parseFloat((operand + currentValue).toFixed(2)).toString();
            break;
        case '-':
            displayValue = parseFloat((operand - currentValue).toFixed(2)).toString();
            break;
        case '*':
            displayValue = parseFloat((operand * currentValue).toFixed(2)).toString();
            break;
        case '/':
            if (currentValue !== 0) {
                displayValue = parseFloat((operand / currentValue).toFixed(2)).toString();
            } else {
                displayValue = 'Error';
            }
            break;
    }
    operator = '';
    operand = 0;

    // Limit to 10 characters for the answer
    if (displayValue.length > 10) {
        displayValue = displayValue.slice(0, 10);
    }

    updateDisplay();
}

// Initial update of the display
updateDisplay();
