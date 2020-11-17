const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.post("/add", (req, res) => {
    let { num1, num2 } = req.body;
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let message = "the sum of given two numbers";
    let sum = num1 + num2;
    const successObj = { status: "success" };
    const errorObj = { status: "error" };
    const failureObj = { status: "failure" };
    let obj = {
        message: message
    };
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        obj.message = "Invalid data types";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    else if (num1>1000000 || num2>1000000 || sum > 1000000) {
        obj.message = "Overflow";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    else if (num1<(-1000000) || num2<(-1000000) || sum <(-1000000)) {
        obj.message = "Underflow";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    let sumObj = {
        sum: sum
    }
    res.status(200).send({ ...successObj, ...obj,...sumObj });
    res.status(404).send({ ...failureObj, ...obj });
})

app.post("/sub", (req, res) => {
    let { num1, num2 } = req.body;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let message = "the difference of given two numbers";
    let sub = num1 - num2;
    const successObj = { status: "success" };
    const errorObj = { status: "error" };
    const failureObj = { status: "failure" };
    let obj = {
        message: message,
       
    };
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        obj.message = "Invalid data types";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    else if (num1>1000000 || num2>1000000 || sub > 1000000) {
        obj.message = "Overflow";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    else if (num1<(-1000000) || num2<(-1000000) || sub <(-1000000)) {
        obj.message = "Underflow";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    let obj1 = {
        difference: sub
    }
    res.status(200).send({ ...successObj, ...obj,...obj1 });
    res.status(404).send({ ...failureObj, ...obj });
})

app.post("/multiply", (req, res) => {
    let { num1, num2 } = req.body;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let message = "The product of given numbers";
    let mul = num1 * num2;
    const successObj = { status: "success" };
    const errorObj = { status: "error" };
    const failureObj = { status: "failure" };
    let obj = {
        message: message,
    };
    let obj1 = {
        result: mul
    }
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        obj.message = "Invalid data types";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    else if (num1>1000000 || num2>1000000 || mul > 1000000) {
        obj.message = "Overflow";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    else if (num1<(-1000000) || num2<(-1000000) || mul <(-1000000)) {
        obj.message = "Underflow";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    res.status(200).send({ ...successObj, ...obj, ...obj1 });
    res.status(404).send({ ...failureObj, ...obj });
})

app.post("/divide", (req, res) => {
    let { num1, num2 } = req.body;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let message = "The division of given numbers";
    let obj = {};
    const successObj = { status: "success" };
    const errorObj = { status: "error" };
    const failureObj = { status: "failure" };
    if(num2===0){
        obj.message = "Cannot divide by zero";
        obj.result = 0;
        res.status(400).send({ ...errorObj, ...obj });
    }
    let div = num1 / num2;
    obj = {
        message: message,
    };

    let obj1 = {
        result: div
    }
    
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        obj.message = "Invalid data types";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    else if (num1>1000000 || num2>1000000 || div > 1000000) {
        obj.message = "Overflow";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    else if (num1<(-1000000) || num2<(-1000000) || div <(-1000000)) {
        obj.message = "Underflow";
        res.status(400).send({ ...errorObj, ...obj });
        return;
    }
    res.status(200).send({ ...successObj, ...obj, ...obj1 });
    res.status(404).send({ ...failureObj, ...obj });
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
