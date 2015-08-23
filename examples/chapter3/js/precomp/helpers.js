define(['handlebars.runtime'], function(Handlebars) {
	Handlebars.helpers['userfy'] = function (user_name) {
		return user_name.toLowerCase().replace(/ /g, '_');
	};
	return Handlebars.helpers
});