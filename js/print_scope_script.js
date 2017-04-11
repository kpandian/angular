/**
 * Created by karthik on 6/4/17.
 */
(function(angular){
    'use strict';
    var myApp = angular.module("myApp",[]);
    myApp.controller("myController", function($scope,$rootScope){
        $rootScope.counter = ($rootScope.counter || 0) + 1;
        console.log($rootScope);
        console.log($scope);
    });
})(window.angular);