'use strict';
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
  .when('/channel/:type/:id',{
    templateUrl: 'views/main.html',
    controller: 'ChannelCtrl'
  })
  .when('/browse/:videoId',{
    templateUrl: 'views/browse.html',
    controller: 'BrowseCtrl',
    controllerAs: 'browse'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
  $rootScope.$on('$routeChangeError', function() {
    $location.path("/error");
  });
  $rootScope.$on('$routeChangeStart', function() {
    $rootScope.isLoading = true;
  });
  $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 1000);
    });
}]);