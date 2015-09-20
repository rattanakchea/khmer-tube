//Home Controller - parent controller for home page

'use strict';

var app = app || {};

app.controller('HomeCtrl', function ($scope, YoutubeService, $location) {

	$scope.menuItems = global.menuItems;

	var query = YoutubeService.query;

	$scope.queryVideo = function(query){
		YoutubeService.queryVideo(query)
		.then(function(videos){
			//console.log(videos);
			$scope.videos = videos;
		});
	};

	$scope.queryVideo(query);

	$scope.setSelectedVideo = function(video){
		YoutubeService.selectedVideo = video; //store a reference
	}
});