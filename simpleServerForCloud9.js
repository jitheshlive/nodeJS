var http = require('http');



var server = http.createServer(function(request,response){
    
	response.writeHead(200,{"Content-Type": "text/plain"});
    
	response.end("Hello World\n");

});

server.listen(process.env.PORT, process.env.IP);
//If using in local comment the above line and uncomment the line below
//server.listen(8000);

console.log("Server running");
