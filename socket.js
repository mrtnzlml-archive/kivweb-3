module.exports = function() {

	var net = require('net');
	var PORT = 8000;

	var server = net.createServer(function(socket) { //nikoliv "request, response", to patří do HTTP
		socket.write("hello\n");
		//socket.end("world\n");

		socket.on('data', function(data) {
			console.log(data);
			socket.write(data);
		});
	});

	server.listen(PORT, function() {
		console.log('Socket server is listening on port ' + PORT);
	});

}