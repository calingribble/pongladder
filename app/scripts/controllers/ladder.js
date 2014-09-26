'use strict';

/**
 * @ngdoc function
 * @name sarpgApp.controller:LadderCtrl
 * @description
 * # LadderCtrl
 * Controller of the sarpgApp
 */
angular.module('sarpgApp')
.controller('LadderCtrl', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {
    $scope.players = {};
    $scope.fontcolor;
    $scope.getmedalcolor = function(num){
      if(num == 0){
        return "#e5c517";
      }else if(num == 1){
        return "#CCCCCC";
      }else if(num == 2){
        return "#cd7f32";
      }else{
        return "#ffffff";
      }
    }
    $scope.switchaccordionclass = function(player){
      if(player.accordionclass==="panel-collapse collapse"){
        player.accordionclass = "panel-collapse";
      }else{
        player.accordionclass = "panel-collapse collapse";
      }
    };

    $http.get('http://pong-ladder-api.herokuapp.com/api/players')
    .success(function(response) {
      $scope.players = response;
      for(var i = 0; i < $scope.players.length; i++) {
        $scope.players[i].accordionclass = "panel-collapse collapse";
      }
    });
  }
]);
