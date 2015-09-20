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

	//not used, because maybe too slow
	function findPlaylist(params){
		//find playlist name from url parameter
		var menuItems = global.menuItems;
		for (var i=0; i <  menuItems.length; i++){
			var arr = menuItems[i].playlists;
			console.log(arr);
			$.each(arr, function(playlist){
				//console.log('param id:' + params);
				//console.log('playlist id:' + playlist.playlistId);
				if (playlist.playlistId == params){
					console.log(playlist);
					return playlist;
				}
			});
		}
	}
});