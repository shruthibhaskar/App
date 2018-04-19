var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/html
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end('<h2>My Third Node App -Jenkins  : PIPELINE JENKINS TEST ASSURANCE DEMO : Test 1  <h2><br />');
}).listen(3004);

// Console will print the message
console.log('Server running on port 3004 from Jenkins : PIPELINE JENKINS TEST AASSURANCE DEMO : Test1 ');
