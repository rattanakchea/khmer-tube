'use strict';

var app = app || {};

app.controller('BrowseCtrl', function ($scope, $location, $sce, $routeParams, YoutubeService) {

	if(jQuery.isEmptyObject(YoutubeService.selectedVideo)){
		//query api with videoid params: $routeParams.videoId
		
		YoutubeService.queryByVideoId($routeParams.videoId)
		.then(function(video){
			$scope.selectedVideo = video;
			$scope.url = $sce.trustAsResourceUrl('http://www.youtube.com/embed/'+
			$routeParams.videoId);
		}, function(err){
			console.log(err);
			//redirect to home
			$location.path('/#/');
		});
	} else {
		$scope.selectedVideo = YoutubeService.selectedVideo;
		$scope.url = $sce.trustAsResourceUrl('http://www.youtube.com/embed/'+
			YoutubeService.selectedVideo.videoId);
	}

	//related video
	//options1: take 4 random videos from root parent scope
	//options2: youtube api similar video
	$scope.relatedVideos = {};

});