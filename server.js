var http = require('http');
var connect = require('connect');
var api = require('./api/api');
var appLib = require('./app/app');


var app = connect();

app.use(connect.favicon());
appLib.configure(app);
api.configure(app);

http.createServer(app).listen(process.env.PORT, process.env.IP);