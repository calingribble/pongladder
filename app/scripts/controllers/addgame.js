'use strict';

/**
 * @ngdoc function
 * @name sarpgApp.controller:AddgameCtrl
 * @description
 * # AddgameCtrl
 * Controller of the sarpgApp
 */
angular.module('sarpgApp')
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

    $http.get('http://localhost:8000/api/players')
    .success(function(response) {
      $scope.players = response;
    });

    $scope.addgame = function() {
      $http.post('http://localhost:8000/api/games', {
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
    };
  }
]);
