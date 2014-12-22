'use strict';

/**
 * @ngdoc overview
 * @name pongladderApp
 * @description
 * # pongladderApp
 *
 * Main module of the application.
 */
angular
  .module('pongladderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ladder.html',
        controller: 'LadderCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
     .when('/addgame', {
        templateUrl: 'views/addgame.html',
        controller: 'AddgameCtrl'
      })
      .when('/addplayer', {
        templateUrl: 'views/addplayer.html',
        controller: 'AddplayerCtrl'
      })
      .otherwise({
        templateUrl: 'views/ladder.html',
        controller: 'LadderCtrl'
      });
  });
