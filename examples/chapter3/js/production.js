require.config({
	paths: {
		"p": "precomp"
	},
	shim: {
		"handlebars": {
			"exports": "Handlebars"
		}
	}
});

require(
	['p/home', 'p/helpers', 'p/partials'],
	function (home, helpers, partials) {
		var html = home({name: "Gabriel"});
		document.body.innerHTML += html;
	});