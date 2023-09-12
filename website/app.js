/* Global Variables */
require('dotenv').config();
const apiKey = process.env.API_KEY;
const name = process.env.NAME;
// const baseURL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=${apiKey}`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const fetch = require('node-fetch');
const API_KEY = apiKey;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const ZIP =  "94040,us";

// 


const apiUrl = `${BASE_URL}?zip=${ZIP}&appid=${API_KEY}&units=metric`;

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
        }        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('There was a problem:', error.message);
    }
}

fetchData();





// // Test code 
// require('dotenv').config();
// const express = require('express');
// const app = express();


// const apiKey = process.env.API_KEY;
// const w_name = process.env.NAME;

// app.get('/', (req, res) => {
//     // res.send(`Your API key is ${apiKey}`);
//     res.send(`Your Name is ${w_name}`);
// });

// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });
