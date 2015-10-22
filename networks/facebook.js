var FacebookSearch = require('facebook-search');

var FB = new FacebookSearch('780668568694904','d16aace6f41281c8286f1eff72d65042');

var searchFor = { type: 'user', q: 'Rajika'};

FB.search(searchFor, function(err, res) { 
	console.log(err ? err : res);
});