//Home Controller - parent controller for home page

'use strict';

var app = app || {};

app.controller('HomeCtrl', function ($scope, YoutubeService, $location) {

	$scope.init = function(){
		$scope.breadcrumbs = ['Welcome to KhmerTube'];
		$scope.queryVideo(query);
		$scope.page = 1;
	}
	
	$scope.menuItems = data.menuItems;

	var query = YoutubeService.query;

	$scope.queryVideo = function(query){
		YoutubeService.queryVideo(query)
		.then(function(videos){
			//console.log(videos);
			$scope.videos = videos;
			$scope.totalVideos = videos.length;
		});
	};

	$scope.init();

	$scope.setSelectedVideo = function(video){
		YoutubeService.selectedVideo = video; //store a reference
	};

	$scope.setSelectedPlaylist = function(menuItem, playlist){
		if(menuItem){ //true, not undefined, or null
			$scope.breadcrumbs.length = 0;
			$scope.breadcrumbs.push(menuItem.name);	
		}
		if (playlist){
			$scope.breadcrumbs.push(playlist.name);
		}
	};

	//load more button
	var size = 12;
	$scope.itemLimits = function(){
		return $scope.page * size;
	};
	$scope.hasMoreItems = function(){
		return $scope.itemLimits() < $scope.totalVideos;
		//return $scope.page < ($scope.videos.length / size);
	};

	$scope.loadMoreItems = function(){
		$scope.page = $scope.page + 1;		
	};

});