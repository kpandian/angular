/**
 * Created by karthik on 11/4/17.
 */
var app = angular.module('ForecastApp', []);

app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });
}]);