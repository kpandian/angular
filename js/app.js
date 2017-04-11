(function(angular) {
  'use strict';
var myApp = angular.module('scopeInheritance', []);
myApp.controller('MainController', ['$scope', function($scope) {

  $scope.timeOfDay = 'morning';
  console.log($scope.timeOfDay);
  $scope.name = 'Nikki';
}]);
myApp.controller('ChildController', ['$scope', function($scope) {
    console.log($scope.timeOfDay);
  $scope.name = 'Mattie';
}]);
myApp.controller('GrandChildController', ['$scope', function($scope) {
    console.log($scope.timeOfDay);
  $scope.timeOfDay = 'evening';
  $scope.name = 'Gingerbread Baby';
}]);
})(window.angular);