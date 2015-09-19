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

	$scope.back = function(){
		window.history.back();
	}

	//related video
	//options1: take 4 random videos from root parent scope
	//options2: youtube api similar video
	if(!jQuery.isEmptyObject($scope.$parent.videos)){
		var videos = $scope.$parent.videos;
		if(videos.length != 0){
			$scope.relatedVideos = getRandomRelatedVideos(videos, 4);	
		}
	}
	
	function getRandomRelatedVideos(arr, n){
		arr.sort(function() { return 0.5 - Math.random() });
		return arr.slice(0, n);	
		
	}

});