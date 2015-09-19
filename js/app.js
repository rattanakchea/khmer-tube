'use strict';

var global = {
  menuItems: [
  {'name': 'Cambodian Idol',
  'id': 'UC8b-bkP65mcy4wMFEw3eirw',
  'recentUpload' : 'UU8b-bkP65mcy4wMFEw3eirw', 
  'playlists': [
  { 'name' : 'Live Show Week 2',
  'playlistId': 'PLpFfrFW3a-RtxUZfC9DRCW_wV0m_AZmDX'
},
{ 'name' : 'Live Show Week 1',
'playlistId': 'PLpFfrFW3a-RveHYUgImU68VhGIZUK_PfK'
},
{ 'name' : 'Green Mile',
'playlistId': 'PLpFfrFW3a-Rv1NR-_a76IsxcP73FqlLp1'
},
{ 'name' : 'Theater Round 2',
'playlistId': 'PLpFfrFW3a-RuD_eDjZBKI3mxfwSQazE-2'
},
{ 'name' : 'Theater Round 1',
'playlistId': 'PLpFfrFW3a-Rs5FEmQYXl66qs39YeRSizL'
},
{ 'name' : 'Judge Audition 4',
'playlistId': 'PLpFfrFW3a-Rs3jnGm-jkW5MTVvvYBkOeG'
},
{ 'name' : 'Judge Audition 3',
'playlistId': 'PLpFfrFW3a-RtoE_SjZawG1_Z2M2C3-ZSz'
},
{ 'name' : 'Judge Audition 2',
'playlistId': 'PLpFfrFW3a-RuPaUS2gXe4S6KcqZTU73yT'
},
{ 'name' : 'Judge Audition 1',
'playlistId': 'PLpFfrFW3a-RteSV-eeyCv-CKHHeQ0BvaV'
}
]
},
{'name': 'The Voice Cambodia',
'id': 'UCosuzQQUHjoPXUePHOiQSdg',
'recentUpload' : 'PLUway4xenNk7siZIsAFDdC0JOkvwok7Wn', 
'playlists': [
{ 'name' : 'Live Show',
'playlistId': 'PLUway4xenNk7siZIsAFDdC0JOkvwok7Wn'
},
{ 'name' : 'Battle Round',
'playlistId': 'PLUway4xenNk7IP7vw1WL7lr-L_sP1wI1d'
},
{ 'name' : 'Blind Audition',
'playlistId': 'PLUway4xenNk6LqM5YHo1YQ8RP3N4CKxwb'
}
]
}
]
}
var app = angular.module('khmerTubeApp', [
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/search', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/about', {
    templateUrl: 'views/about.html'
  })
  .when('/channel/:channelId',{
    templateUrl: 'views/main.html',
    controller: 'MenuCtrl',
    controllerAs: 'menu'
  })
  .when('/browse/:videoId',{
    templateUrl: 'views/browse.html',
    controller: 'BrowseCtrl',
    controllerAs: 'browse'
  })
  .otherwise({
    redirectTo: '/'
  });
});

$(document).ready(function(){
  console.log('ready');
  
});