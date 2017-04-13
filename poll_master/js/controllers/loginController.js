/**
 * Created by karthik on 12/4/17.
 */
pollApp.controller('loginController',['$scope','$http','loginService', function($scope,$http,loginService){
    $scope.authenticate_user = function(){
        $scope.auth = loginService.login($scope.user,$scope.pwd);
        console.log($scope.auth);
        /*if($scope.auth['response']=='success'){
            $location.path('/home');
        }
        else{
            $scope.error = 'Authentication Problem';
        }*/
    }
}]);