var fs = require("fs");
var path = process.argv[2];
var extension = "." + process.argv[3];

var str = fs.readdir(path, function(err, data) {
	
	if (err) {

		return err;

	}

	for (var i = 0; i <= data.length; i ++) {

		if (data[i].indexOf(extension) != -1) {

			console.log(data[i]);
		}
	}

});
