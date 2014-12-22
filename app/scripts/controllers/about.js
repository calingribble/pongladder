'use strict';

/**
 * @ngdoc function
 * @name pongladderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pongladderApp
 */
angular.module('pongladderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
