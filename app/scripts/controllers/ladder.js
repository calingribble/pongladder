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
 $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
    //$scope.players = {};

    //$http.get('http://localhost:8000/api/players')
    //.success(function(response) {
      //$scope.players = response;
    //});
    //$scope.status = {
      //isFirstOpen: false,
      //isFirstDisabled: false
    //};
  }
]);
