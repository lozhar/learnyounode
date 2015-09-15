var fs = require("fs");
var path = process.argv[2];
var encoding = "utf8";

var str = fs.readFile(path, encoding, function(err, data) {
	if (err) {
		return err;
	}
	console.log(data.split("\n").length - 1);
});