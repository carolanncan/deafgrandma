var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

app.use(serveStatic('application'));
app.listen(3000);

console.log("Server started");
