'use strict';

/**
 * @ngdoc function
 * @name pongladderApp.controller:AddplayerCtrl
 * @description
 * # AddplayerCtrl
 * Controller of the pongladderApp
 */
angular.module('pongladderApp')
.controller('AddplayerCtrl', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {
    $scope.player = {};

    $scope.addplayer = function() {
      $http.post('http://pong-ladder-api.herokuapp.com/api/players', {
        name: $scope.player.name,
        handle: $scope.player.handle
      })
      .success(function(response) {
        $location.url('/');
      })
      .error(function(response) {
        console.log(response);
      });
    };
  }
]);
