/**
 * Created by karthik on 6/4/17.
 */
(function(angular){
'use strict';
var myApp = angular.module('myServiceModule',[]);
myApp.controller('serviceController',['$scope','notify' , function($scope, notify){
    console.log("serviceController Called");
    $scope.test = "Test";
    $scope.clickToSee = function(msg){
        console.log("clicktosee Called");
        notify(msg);
    };
}]).factory('notify',['$window',function(win){
    console.log("factory Called");
    var msgs = [];
    return function(msg){
        console.log("value added to the array");
        msgs.push(msg);
        if(msgs.length === 3){
            console.log("value displayed");
            win.alert(msgs.join('\n'));
            msgs = [];
        }
    };
}]);
myApp.controller('serviceController2',['$scope','notify' , function($scope, notify){
    console.log("serviceController2 Called");
    $scope.test = "Test";
    $scope.clickToSee = function(msg){
        console.log("clicktosee2 Called");
        notify(msg);
    };
}]);
//myApp.controller('serviceController2',[$scope,'notify',function()])
})(window.angular);