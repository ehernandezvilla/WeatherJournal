# Weather Journal App

## Summary

The Weather Journal App is a dynamic web application that uses the OpenWeatherMap API to retrieve weather data based on the ZIP code provided by the user. The user can also input their feelings, and the app will store and display the weather data along with the date and the user's feelings.

## Features

- Fetches real-time weather data from OpenWeatherMap API based on ZIP code.
- Allows users to input their feelings.
- Displays the most recent entry with date, temperature, and user's feelings.
- Backend server setup using Express.js to store and manage data entries.

## Files

### `server.js`

This is the server-side script for the application. It sets up an Express server, defines routes for getting and posting data, and manages the data in memory.

### `app.js`

This is the client-side script for the application. It handles:
- Capturing user input (ZIP code and feelings).
- Making API calls to OpenWeatherMap to fetch weather data.
- Posting the fetched data along with the user's input to the server.
- Updating the UI with the latest entry.

## Warning

⚠️ For testing purposes, the API key is currently hardcoded in the client-side script (`app.js`). This is not recommended for production. In a production environment, always use environment variables (e.g., `.env` files) on the server-side to store sensitive information like API keys.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Install the required packages using `npm install`.
4. Start the server using `node server.js`.
5. Open a browser and navigate to `http://localhost:3000` to access the app.

## Future Enhancements

- Implement data persistence using databases.
- Add more comprehensive error handling.
- Enhance the UI/UX for a more engaging user experience.

### `test.js`

This file contains tests for the application's server-side logic. It uses the `jest` testing framework and `supertest` for testing HTTP assertions.

## Testing

To ensure the reliability and correctness of the application, tests have been written for the server-side logic. Here's a brief overview of the testing setup:

- **Testing Framework**: [Jest](https://jestjs.io/), a popular JavaScript testing framework, is used to write and run the tests.
  
- **HTTP Testing**: [Supertest](https://www.npmjs.com/package/supertest) is used to simulate HTTP requests and test the server's responses.

### Running the Tests

To run the tests, use the following command:

```bash
npm test

