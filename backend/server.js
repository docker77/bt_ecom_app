const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.url === "/home" || request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(response);
  } else if (request.url === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/about.html").pipe(response);
  } else if (request.url === "/api/umbrellaacademy") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(badasses));
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(response);
  }
});

server.listen(3000, "127.0.0.1");
console.log("You are currently listening to port 3000");
