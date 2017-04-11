/**
 * Created by karthik on 10/4/17.
 */
(function(angular) {
  'use strict';
angular.module('customTriggerExample', [])
 .controller('ExampleController', ['$scope', function($scope) {
   $scope.user = {};
 }]);
})(window.angular);