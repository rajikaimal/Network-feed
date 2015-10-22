var search = require('youtube-search');
 
var opts = {
  maxResults: 3,
  key: 'AIzaSyApB3HeHX_8RfxqOCzkHLcqFkR0tKJTuuY'
};
 
var youtubeSearch = 

feed = function(query){
	search(query.toString(), opts, function(err, results) {
	  if(err) return console.log(err);
	 
	  console.dir(results);
	});
}

module.exports = feed;