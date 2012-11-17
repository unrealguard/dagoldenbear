var http = require('http');
var connect = require('connect');
var api = require('./api/api');
var appLib = require('./app/app');


var app = connect();

app.use(connect.favicon());
appLib.configure(app);
api.configure(app);

var ip = process.env.IP || "localhost";
var port = process.env.PORT || "8080";

http.createServer(app).listen(port, ip);

console.log("Listening at http://" + ip + ":" + port);