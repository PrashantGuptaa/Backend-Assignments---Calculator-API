const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
let low = -1000000,
  high = 1000000;
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/add", (req, res) => {
  console.log(req.body);
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  let status = "success",
    message = "the sum of given two numbers";
  if (num1 < low || num2 < low) {
    status = "error";
    message = "Underflow";
  } else if (num1 > high || num2 > high) {
    status = "error";
    message = "Overflow";
  } else if (isNaN(num1) || isNaN(num2)) {
    status = "error";
    message = "Invalid data types";
  }

  const result = {
    status,
    message,
    result: num1 + num2,
  };
  res.send(result);
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  let status = "success",
    message = "the difference of given two numbers";
  if (num1 < low || num2 < low) {
    status = "error";
    message = "Underflow";
  } else if (num1 > high || num2 > high) {
    status = "error";
    message = "Overflow";
  } else if (isNaN(num1) || isNaN(num2)) {
    status = "error";
    message = "Invalid data types";
  }
  const result = {
    status,
    message,
    result: num1 - num2,
  };
  res.send(result);
});

app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  let status = "success",
    message = "the product of given two numbers";
  if (num1 < low || num2 < low) {
    status = "error";
    message = "Underflow";
  } else if (num1 > high || num2 > high) {
    status = "error";
    message = "Overflow";
  } else if (isNaN(num1) || isNaN(num2)) {
    status = "error";
    message = "Invalid data types";
  }
  const result = {
    status,
    message,
    result: num1 * num2,
  };
  res.send(result);
});

app.post("/divide", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  let status = "success",
    message = "The division of given numbers";
  if (num2 === 0) {
    status = "error";
    message = "Cannot divide by zero";
  } else if (num1 < low || num2 < low) {
    status = "error";
    message = "Underflow";
  } else if (num1 > high || num2 < high) {
    status = "error";
    message = "Overflow";
  } else if (isNaN(num1) || isNaN(num2)) {
    status = "error";
    message = "Invalid data types";
  }
  const result = {
    status,
    message,
    result: num1 / num2,
  };
  res.send(result);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
