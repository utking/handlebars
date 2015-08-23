var fs = require("fs");
var requirejs = require("requirejs");
fs.readdir("helpers/", function (err, files){
	if (err) {
		console.log(err);
	} else {
		var out = "define(['handlebars.runtime'], function(Handlebars) {\n";
			for (var i = 0; i < files.length; i ++) {
				var filename = files[i];
				if (filename.substr(-3) == ".js") {
					var func = requirejs("helpers/" + filename);
					var name = filename.substr(0, filename.length - 3);
					out += "\tHandlebars.helpers['" + name + "']";
					out += " = " + func.toString() + ";\n";
				}
			}
			out += "\treturn Handlebars.helpers\n";
			out += "});"
		fs.writeFileSync("precomp/helpers.js", out);
	}
});