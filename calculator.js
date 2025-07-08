// Calculator Module

// Addition function
const add = (a, b) => {
    return a + b;
};

// Subtraction function
const subtract = (a, b) => {
    return a - b;
};

// Multiplication function
const multiply = (a, b) => {
    return a * b;
};

// Division function
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

// Export the functions
module.exports = {
    add,
    subtract,
    multiply,
    divide
}; 