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

## How `require` Works in Node.js

In this project, we use `require('./calculator')` to import the calculator module into our main application. This allows us to use the functions defined in the calculator.js file in our server logic.

The calculator module exports four functions:
- `add(a, b)`: Adds two numbers
- `subtract(a, b)`: Subtracts the second number from the first
- `multiply(a, b)`: Multiplies two numbers
- `divide(a, b)`: Divides the first number by the second (with error handling for division by zero)

These functions are then used in the server.js file to perform calculations based on user input from the front-end.

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