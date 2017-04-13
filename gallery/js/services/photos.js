/**
 * Created by karthik on 12/4/17.
 */
app.factory('photos', ['$http', function($http) {
  return $http.get('http://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
