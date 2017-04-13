/**
 * Created by karthik on 12/4/17.
 */
app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);
