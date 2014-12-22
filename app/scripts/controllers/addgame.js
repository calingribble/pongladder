'use strict';

/**
 * @ngdoc function
 * @name pongladderApp.controller:AddgameCtrl
 * @description
 * # AddgameCtrl
 * Controller of the pongladderApp
 */
angular.module('pongladderApp')
.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
    input.push(i);
    return input;
  };
})
.controller('AddgameCtrl', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {

    $scope.winner = {};
    $scope.loser = {};
    $scope.winnerpoints;
    $scope.loserpoints;

    $scope.$watch(
      function( $scope ) {
      return( $scope.winner );
    },
    function(winner) {
    }
    );

    $scope.$watch(
      function( $scope ) {
      return( $scope.loser );
    },
    function( loser ) {
    }
    );

    $http.get('http://pong-ladder-api.herokuapp.com/api/players')
    .success(function(response) {
      $scope.players = response;
    });

    $scope.addgame = function() {
      if($scope.winner && $scope.loser && $scope.winnerpoints && $scope.loserpoints){
        $http.post('http://pong-ladder-api.herokuapp.com/api/games', {
          winner: $scope.winner,
          loser: $scope.loser,
          winnerPoints: $scope.winnerpoints,
          loserPoints: $scope.loserpoints
        })
        .success(function(response) {
          $location.url('/');
        })
        .error(function(response) {
          console.log(response);
        });
      }
    };
  }
]);
