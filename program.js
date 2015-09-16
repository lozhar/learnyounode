var http = require("http");
var url = process.argv[2];

http.get(url, function (response) {
	var completeData = new Array();
	response.setEncoding("utf8");
	response.on("data", function (chunk) {
		completeData += chunk;
	});
	response.on("error" , console.error);
	response.on("end", function () {
		console.log(completeData.length);
		console.log(completeData);
	});

});