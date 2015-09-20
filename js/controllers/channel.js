'use strict';

var app = app || {};

app.controller('ChannelCtrl', function ($scope, $routeParams, YoutubeService, $sce) {

	$scope.queryByChannel = function(playlistId){
		YoutubeService.queryByChannel(playlistId)
		.then(function(videos){
			//console.log(videos);
			$scope.$parent.videos = videos;
		});
	};

	if($routeParams.channelId) {
		$scope.queryByChannel($routeParams.channelId);	
	}
});