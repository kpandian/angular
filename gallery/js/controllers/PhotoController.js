/**
 * Created by karthik on 12/4/17.
 */
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    //console.log($routeParams);
    $scope.detail = data[$routeParams.id];
  });
}]);