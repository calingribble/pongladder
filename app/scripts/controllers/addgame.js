'use strict';

/**
 * @ngdoc function
 * @name sarpgApp.controller:AddgameCtrl
 * @description
 * # AddgameCtrl
 * Controller of the sarpgApp
 */
angular.module('sarpgApp')
.controller('AddgameCtrl', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {
    //$http.defaults.headers.post['Content-Type'] = 'application/json';

    $scope.winner = {};

    $scope.$watch(
      function( $scope ) {
      //if($scope.winner && $scope.winner.length > 0){
        //$scope.winner = $scope.winner;
      //}
      // This becomes the value we're "watching".
      return( $scope.winner );
    },
    function( winner ) {
      if(winner && winner.length > 1){
        winner = winner[1];
      }
      console.log( winner );
    }
    );

    $http.get('http://localhost:8000/api/players')
    .success(function(response) {
      $scope.players = response;
    });

    $scope.addgame = function() {
      //$scope.error = null;
      $http.post('http://localhost:8000/api/games', {
        winner: $scope.winner,
        loser: $scope.loser,
        winnerscore: $scope.winnerscore,
        loserscore: $scope.loserscore
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
