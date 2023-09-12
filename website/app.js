// Global variables
require('dotenv').config(); // For env variables 
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY; // Openweather map api 
const name = process.env.NAME; // User name

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Referencing env variables to build base URL

const API_KEY = apiKey;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const ZIP =  "94040,us";
const apiUrl = `${BASE_URL}?zip=${ZIP}&appid=${API_KEY}&units=metric`;

