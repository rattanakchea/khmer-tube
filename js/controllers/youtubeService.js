'use strict';
app.constant('API_BASEURL', 'https://www.googleapis.com/youtube/v3/')
.constant('API_KEY', 'AIzaSyBbrsJJld4NamdmdaHIgVp1zDXY7HT_7lM');


app.factory('YoutubeService', function($http, API_BASEURL, API_KEY){
	var path = {
		search: 'search',
		channel: 'channels'
	};

	//private helper method
	function parseData(data){
		var returnedData = [];
		$.each(data.data.items, function(index, item){		
			var object = {
				'videoId': item.id.videoId,
				'img': item.snippet.thumbnails.high.url,
				'title': item.snippet.title
			};
			returnedData.push(object);

		});
		return returnedData;
	} 

	var service = {};

	service.queryVideo = function(query){
		query = query || 'khmer new songs';
		var config = {
			part: 'snippet',
			q: query,
			key: API_KEY,
			maxResults: 4
		};

		//must use 'return' to return the promise
		return $http.get(API_BASEURL + path.search,
		{
			params: config,
			cache: true
		}).then(function(res){
			//parse response
			console.log(res);
			return parseData(res);
		});

	};

	

	return service;

});