'use strict';

/**
 * @ngdoc function
 * @name pongladderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pongladderApp
 */
angular.module('pongladderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
