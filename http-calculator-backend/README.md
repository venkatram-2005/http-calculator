# HTTP Calculator

This project is a simple HTTP-based calculator built using Node.js and Express. It provides endpoints for basic arithmetic operations: addition, subtraction, multiplication, and division.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/http-calculator.git
   ```
2. Navigate to the project directory:
   ```
   cd http-calculator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```
The server will start on `http://localhost:3000`.

## Endpoints

The following endpoints are available:

- **Addition**
  - **GET** `/add?num1=<number>&num2=<number>`
  - **POST** `/add` with JSON body `{ "num1": <number>, "num2": <number> }`

- **Subtraction**
  - **GET** `/subtract?num1=<number>&num2=<number>`
  - **POST** `/subtract` with JSON body `{ "num1": <number>, "num2": <number> }`

- **Multiplication**
  - **GET** `/multiply?num1=<number>&num2=<number>`
  - **POST** `/multiply` with JSON body `{ "num1": <number>, "num2": <number> }`

- **Division**
  - **GET** `/divide?num1=<number>&num2=<number>`
  - **POST** `/divide` with JSON body `{ "num1": <number>, "num2": <number> }`

## Error Handling

The calculator handles edge cases such as:

- Division by zero will return a 400 status code with an appropriate error message.
- Invalid input types will also return a 400 status code with an error message.

Feel free to contribute to the project by submitting issues or pull requests!