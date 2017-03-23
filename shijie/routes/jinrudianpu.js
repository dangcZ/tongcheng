var lastIndex = __dirname.lastIndexOf("/");
var abPath = __dirname.slice(0, lastIndex);
exports.jinrudianpu = function(req, res){
	res.sendFile(abPath + "/dist/html/jinrudianpu.html");
};
