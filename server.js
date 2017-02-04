var http = require('http');

function onRequest(request, response){
	console.log("User request", request);
	response.writeHead(200, {"Context-Type": "text/html"});
	response.end();
}

http.createServer(onRequest).listen(8080);

console.log("Server is now running");