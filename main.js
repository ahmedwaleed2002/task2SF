// Import the calculator module
const calculator = require('./calculator');

// Example usage of the calculator module
console.log("Addition: 5 + 3 =", calculator.add(5, 3));
console.log("Subtraction: 10 - 4 =", calculator.subtract(10, 4));
console.log("Multiplication: 6 * 7 =", calculator.multiply(6, 7));
console.log("Division: 20 / 5 =", calculator.divide(20, 5));

// Error handling example
try {
    console.log("Division by zero:", calculator.divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
} 