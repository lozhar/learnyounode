var net = require('net');
var port = process.argv[2];


var server = net.createServer(function (socket) {
	function addZero (num) {
		if (num < 10) {
			var theHour = "0" + num;
			return theHour;
		}
		else {
			return num;
		}
	}

	var date = new Date();
	var year = date.getFullYear();
	var month = addZero(date.getMonth() + 1);
	var day = date.getDate();
	var hours = addZero(date.getHours());
	var minutes = addZero(date.getMinutes());
    var data = year+"-"+month+"-"+day+" "+hours+":"+minutes;


    socket.end(data);


});

server.listen(port);


