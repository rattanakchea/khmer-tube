'use strict';

var app = app || {};

app.controller('ChannelCtrl', function ($scope, $routeParams, YoutubeService, $sce) {


	$scope.queryByPlaylistId = function(playlistId){
		YoutubeService.queryByPlaylistId(playlistId)
		.then(function(videos){
			//console.log(videos);
			$scope.$parent.videos = videos;
			$scope.$parent.page = 1; //reset load more
		});
	};


	$scope.queryByChannelId = function(playlistId){
		YoutubeService.queryByChannelId(playlistId)
		.then(function(videos){
			//console.log(videos);
			$scope.$parent.videos = videos;
			$scope.$parent.page = 1; //reset load more
		});
	};

	if($routeParams.type) {
		switch($routeParams.type){
			case 'channelId':
				console.log($routeParams.id);
				$scope.queryByChannelId($routeParams.id);
				break;
			case 'playlistId':
				$scope.queryByPlaylistId($routeParams.id);
				break;
			default:
				console.log('no type identified');
		}	
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