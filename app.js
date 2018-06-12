'use strict';

// Dependencies
const express = require('express');
const bodyParser = require('body-parser')

// Global variables
const port = 8080;

const sensors = require('./routes/sensors');

// Init Application
const app = express();

// Setup Middlewares

// Static Files
app.use('/', express.static('public'))

// Body Parser
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

// Routes
app.use('/sensors', sensors);


// Start Express Server
app.listen(port)
console.log('Server listening on ' + port);