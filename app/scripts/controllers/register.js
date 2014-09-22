'use strict';

/**
 * @ngdoc function
 * @name sarpgApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the sarpgApp
 */
angular.module('sarpgApp')
.controller('RegisterCtrl', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $scope.account = {};

    $scope.register = function() {
      //$scope.error = null;
      $http.json('localhost:8000/api/accounts', {
        email: $scope.account.email,
        password: $scope.account.password
        //confirmPassword: $scope.account.confirmPassword
      })
      .success(function() {
        //// authentication OK
        ////$scope.registerError = 0;
        ////$rootScope.account = $scope.account;
        ////$rootScope.$emit('loggedin');
        //$location.url('/');
      })
      .error(function(error) {
        console.log(error);
        //// Error: authentication failed
          //$scope.error = error;
      });
    };
  }
]);
