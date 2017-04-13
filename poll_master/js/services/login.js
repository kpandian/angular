/**
 * Created by karthik on 13/4/17.
 */
pollApp.service("loginService",['$http','$httpProvider' , function($http,$httpProvider){
    var login_action = {};

    var url = 'http://localhost/poll_master/server/controllers/controller.php';
    login_action.login = function(user,pwd){
        var req = {
         method: 'POST',
         url: url,
         headers: {
           'Content-Type': 'application/json',

         },
         data: {
            action: 'login_action',
            username: user,
            password: pwd
            }
        };
        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
        var data = {
            action: 'login_action',
            username: user,
            password: pwd
        };
    $http.post(url,JSON.stringify(data),config).then(
            function(response){
                console.log(response);
                return response;
            },
            function(response){
                return response;
            });
    };
    return login_action;
}]);