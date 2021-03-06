// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
// Setup Server
const server = app.listen(port, () => {
    console.log(`running on localhost:  + ${port}`);
});

// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.send(projectData);
});
// Post Route

app.post('/callBack', (req, res) => {
    projectData = {
        temp: req.body.temp,
        date: req.body.date,
        content: req.body.content
    }
    res.send(projectData)
})