'use strict';
app.constant('API_BASEURL', 'https://www.googleapis.com/youtube/v3/')
.constant('API_KEY', 'AIzaSyBbrsJJld4NamdmdaHIgVp1zDXY7HT_7lM');


app.factory('YoutubeService', function($http, API_BASEURL, API_KEY){
	var path = {
		search: 'search',
		videos: 'videos',
		channel: 'channels',
		playlistItems: 'playlistItems'
	};


	//private helper method
	function parseData(data){
		var returnedData = [];
		$.each(data.data.items, function(index, item){		
			var object = {
				'videoId': item.id.videoId,
				'img': item.snippet.thumbnails.high.url,
				'title': item.snippet.title,
				'description': item.snippet.description
			};
			returnedData.push(object);

		});
		return returnedData;
	};
	//private helper method
	function parseDataChannel(data){
		console.log(data);
		var returnedData = [];
		$.each(data.data.items, function(index, item){		
			var object = {
				'videoId': item.snippet.resourceId.videoId,
				'img': item.snippet.thumbnails.high.url,
				'title': item.snippet.title,
				'description': item.snippet.description
			};
			returnedData.push(object);

		});
		return returnedData;
	} 

	var service = {};

	service.query = 'khmer new songs';
	service.videos = [];
	service.selectedVideo = {};

	service.queryVideo = function(query){
		query = query || service.query;
		var config = {
			part: 'snippet',
			q: query,
			key: API_KEY,
			maxResults: 24
		};

		//must use 'return' to return the promise
		return $http.get(API_BASEURL + path.search,
		{
			params: config,
			cache: true
		}).then(function(res){
			//parse response
			//console.log(res);
			return parseData(res);
		});
	};

	//query by videoId
	service.queryByVideoId = function(videoId){
		var config = {
			part: 'snippet',
			id: videoId,
			key: API_KEY,
			maxResults: 1
		};
		//must use 'return' to return the promise
		return $http.get(API_BASEURL + path.videos,
		{
			params: config,
			cache: true
		}).then(function(res){
			console.log(res);
			var data = res.data.items[0].snippet;
			return {
				title: data.title,
				description: data.description
			};
		});		
	};

	//query by channel id
	service.queryByChannel = function(playListId){
		var config = {
			part: 'snippet',
			playlistId: playListId,
			key: API_KEY,
			maxResults: 30
		};
		return $http.get(API_BASEURL + path.playlistItems,
		{
			params: config,
			cache: true
		}).then(function(res){
			return parseDataChannel(res);
		});		
	}

	return service;

});