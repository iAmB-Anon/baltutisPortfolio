// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 8080;

// Create server
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  switch (request.url) {
    case "/css/style.css":
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(cssFile);
      break;
    default:
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(htmlFile);
  }
  // Here we use the fs package to read our index.html file
  // fs.readFile(__dirname + "/index.html", function(err, data) {
  //   res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  // });
}

// Start server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
