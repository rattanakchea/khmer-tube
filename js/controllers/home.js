//Home Controller - parent controller for home page

'use strict';

var app = app || {};

app.controller('HomeCtrl', function ($scope, YoutubeService, $location) {

	$scope.init = function(){
		$scope.breadcrumbs = ['Welcome to KhmerTube'];
		$scope.queryVideo(query);	
	}
	
	$scope.menuItems = global.menuItems;

	var query = YoutubeService.query;

	$scope.queryVideo = function(query){
		YoutubeService.queryVideo(query)
		.then(function(videos){
			//console.log(videos);
			$scope.videos = videos;
		});
	};

	$scope.init();

	$scope.setSelectedVideo = function(video){
		YoutubeService.selectedVideo = video; //store a reference
	}

	$scope.setSelectedPlaylist = function(menuItem, playlist){
		if(menuItem){ //true, not undefined, or null
			$scope.breadcrumbs.length = 0;
			$scope.breadcrumbs.push(menuItem.name);	
		}
		if (playlist){
			$scope.breadcrumbs.push(playlist.name);
		}
	}
});