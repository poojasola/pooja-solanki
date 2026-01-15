const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({path: './config/.env'});
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('School Management System API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // connectDB();
});