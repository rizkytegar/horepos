const express = require('express') 
const helmet = require('helmet')
const bodyParser = require('body-parser');
const Route = require('./routers/Route');
const App = express()
const Port = 3000;

/**
 * Middleware to parse URL-encoded data
 */
App.use(bodyParser.urlencoded({
   extended: true 
}));

/**
 * Helmet middleware for added security headers
 */
App.use(helmet())

/**
 * Middleware to parse JSON data
 */
App.use(bodyParser.json());

/**
 * Use the router defined in the 'Route' module for all routes starting from '/'
 */
App.use('/', Route);

/**
 * Start the server and listen on the specified port
 */
var Server = App.listen(Port, function () {

  console.log(`Express-API listening on port : ${Port}`);

});

/**
 * Export the server instance for potential use in other files
 */
module.exports = { Server, App };
