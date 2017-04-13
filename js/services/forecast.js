/**
 * Created by karthik on 11/4/17.
 */
app.factory("forecast",['$http', function($http){
  return $http.get('http://localhost/server_script.php')
  .success(function(data){
      console.log(data);
    return data;
  })
  .error(function(err){
    return err;
  });
}]);