/**
 * Created by karthik on 7/4/17.
 */
(function(angular) {
  'use strict';
angular.module('eventExample', [])
  .controller('EventController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent', function() {
      $scope.count++;
    });
  }]);
})(window.angular);