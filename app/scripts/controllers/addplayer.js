'use strict';

/**
 * @ngdoc function
 * @name sarpgApp.controller:AddplayerCtrl
 * @description
 * # AddplayerCtrl
 * Controller of the sarpgApp
 */
angular.module('sarpgApp')
.controller('AddplayerCtrl', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {
    $scope.player = {};

    $scope.addplayer = function() {
      //$scope.error = null;
      $http.post('http://localhost:8000/api/players', {
        name: $scope.player.name,
        handle: $scope.player.handle
      })
      .success(function(response) {
//console.log(response);
        // authentication OK
        //$scope.addgameError = 0;
        //$rootScope.account = $scope.account;
        //$rootScope.$emit('loggedin');
        $location.url('/');
      })
      .error(function(response) {
console.log(response);
        // Error: authentication failed
          //$scope.error = error;
      });
    };
  }
]);
