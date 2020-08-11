const http = require('http'); 
const fs = require('fs'); 
const header = 'header.html';
const body = 'body.html';
const footer = 'footer.html';

http.createServer((request, response) => {
	fs.readFile(header, 'utf8', (err, data) => {
		if (err) {
			response.statusCode = 404;
			response.end();
		} else {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});

	fs.readFile(body, 'utf8', (err, data) => {
		if (err) {
			response.statusCode = 404;
			response.end();
		} else {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});

	fs.readFile(footer, 'utf8', (err, data) => {
		if (err) {
			response.statusCode = 404;
			response.end();
		} else {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});
}).listen(8080, () => {
	console.log("HTTP server works in 8080 port!\n");
});