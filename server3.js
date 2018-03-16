var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/html
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end('<h2>My Third Node App -Jenkins - test -Pranav demo test<h2><br />');
}).listen(3003);

// Console will print the message
console.log('Server running on port 3003 from Jenkins : Pranav demo');
