/**
 * app:
 * 
 * Exports a function to configure the resturant application
 * 
 */
 
 var connect = require("connect");
 
 var loggerOptions = 'dev';
 
 module.exports.configure = function (app) {
    
    app.use(connect.logger(loggerOptions));
    app.use(connect.static(__dirname + '/public'));
 };