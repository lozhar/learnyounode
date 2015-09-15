var filter = require("./module");
var path = process.argv[2];
var extension = process.argv[3];
filter(path, extension, function(err, data) {
	if (err) {
		return err;
	}
	for (var i = 0; i<= data.length -1; i ++){
		console.log(data[i]);
	}
	
});