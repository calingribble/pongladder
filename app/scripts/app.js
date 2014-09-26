'use strict';

/**
 * @ngdoc overview
 * @name sarpgApp
 * @description
 * # sarpgApp
 *
 * Ladder module of the application.
 */
angular
  .module('sarpgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nya.bootstrap.select'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/addgame', {
        templateUrl: 'views/addgame.html',
        controller: 'AddgameCtrl'
      })
      .when('/addplayer', {
        templateUrl: 'views/addplayer.html',
        controller: 'AddplayerCtrl'
      })
      .when('/', {
        templateUrl: 'views/ladder.html',
        controller: 'LadderCtrl'
      })
      .otherwise({
        templateUrl: 'views/ladder.html',
        controller: 'LadderCtrl'
        //redirectTo: '/'
      });
  });
