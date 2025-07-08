const express = require('express');
const path = require('path');
const calculator = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the calculator app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for calculations
app.post('/calculate', (req, res) => {
    try {
        const { num1, num2, operation } = req.body;
        
        // Convert string inputs to numbers
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        
        let result;
        
        // Perform the requested operation
        switch (operation) {
            case 'add':
                result = calculator.add(a, b);
                break;
            case 'subtract':
                result = calculator.subtract(a, b);
                break;
            case 'multiply':
                result = calculator.multiply(a, b);
                break;
            case 'divide':
                result = calculator.divide(a, b);
                break;
            default:
                return res.status(400).json({ error: 'Invalid operation' });
        }
        
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 