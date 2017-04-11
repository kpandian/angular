/**
 * Created by karthik on 10/4/17.
 */
(function(angular){
    'use strict';
var myapp = angular.module('docsSimpleDirective',[]);
myapp.controller('Controller' ,['$scope' , function($scope){
$scope.customer = {
    'name' : 'ssmpleNme',
    'contact' : '2323232323'
};
}]);
myapp.directive('myCustomer', function(){
    return {
        template : '<b>name :  {{customer.name}} <i>contact : {{customer.contact}}</i></b>'
    }
});
})(window.angular);
