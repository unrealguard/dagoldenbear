
/**
 * api:
 * 
 * Exports a series of utilites to setup the REST API
 * 
 */
 
 var connect = require("connect");
 var food = require('./food');
 
 var path = '/api';
 
 var loggerOptions = 'dev';
 
 module.exports.configure = function (app) {
    
    app.use(path, connect.logger(loggerOptions));
    app.use(path, food);
 };