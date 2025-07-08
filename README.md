# Calculator App - Ahmed Waleed Task 2

A simple calculator application built with Node.js and Express. It supports basic operations such as addition, subtraction, multiplication, and division. The app has a clean and responsive front-end interface built with HTML, CSS, and JavaScript.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Clean, responsive UI that works on both desktop and mobile devices
- Error handling for division by zero
- Back-end calculations using Node.js

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedwaleed2002/task2SF.git
   cd task2SF
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and go to http://localhost:3000 to use the calculator.

## Understanding `require` in Node.js

### What is `require`?

In Node.js, `require` is a built-in function used to include modules from external files or packages. It's the primary way to import functionality from other files or third-party libraries into your current file.

### How `require` Works in Node.js

When you call `require('./calculator')` in a Node.js application, the following steps occur:

1. **Resolution**: Node.js resolves the path to the module:
   - If the path begins with `./` or `../`, it's treated as a relative path
   - If the path doesn't have a prefix, Node.js looks in `node_modules` directory
   - Node.js adds `.js`, `.json`, or `.node` extension if not specified

2. **Loading**: Node.js loads the file content:
   - For `.js` files, the code is parsed as JavaScript
   - For `.json` files, the content is parsed as JSON
   - For `.node` files, the content is loaded as a compiled addon

3. **Wrapping**: Node.js wraps the code in a function to create a private scope:
   ```javascript
   (function(exports, require, module, __filename, __dirname) {
     // Your module code
   });
   ```

4. **Execution**: The wrapped code is executed, and the module's exports are populated

5. **Caching**: Node.js caches the module to avoid re-loading if required again

6. **Return**: The `module.exports` object is returned to the caller

### Module Exports in Our Calculator App

In our calculator application, we use the module system as follows:

**calculator.js (Module)**:
```javascript
// Define functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
};

// Export the functions
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
```

**server.js (Consumer)**:
```javascript
// Import the calculator module
const calculator = require('./calculator');

// Use the imported functions
calculator.add(5, 3);  // Returns 8
```

### `module.exports` vs `exports`

- `module.exports` is the object that's returned from `require()` calls
- `exports` is a reference to `module.exports` that can be used as a shorthand
- If you assign a new value to `exports`, it breaks the reference to `module.exports`

### Benefits of Node.js Module System

1. **Code Organization**: Separate functionality into different files
2. **Reusability**: Use the same code in multiple places
3. **Encapsulation**: Keep implementation details private
4. **Dependency Management**: Clearly define and manage dependencies

## Project Structure

- `calculator.js`: Contains the calculator module with basic arithmetic functions
- `main.js`: Demonstrates the usage of the calculator module
- `server.js`: Express server that handles API requests and serves static files
- `public/`: Directory containing front-end files
  - `index.html`: The HTML structure of the calculator
  - `styles.css`: CSS styles for the calculator UI
  - `script.js`: Front-end JavaScript for handling user interactions

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (ES6+) 