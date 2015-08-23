define([], function() {
	return function(user_name) {
		return user_name.toLowerCase().replace(/ /g, '_');
	}
});
