/**
 * Created by karthik on 6/4/17.
 */
(function(angular){
    'use strict';
    var myApp = angular.module("myApp",[]);
   /*myApp.controller("factoryController", [ "$scope", "calculateFactory" , function($scope, calculateFactory){
        $scope.doSum = function(){
            $scope.result = calculateFactory.doSum($scope.var1, $scope.var2);
        };
    }]);
    myApp.controller("serviceController", ["$scope" , "calculateService" , function($scope, calculateService){
        $scope.doSum = function(){
            $scope.result = calculateService.doSum($scope.var1, $scope.var2);
        };
    }]);*/
    myApp.controller("providerController" , ['$scope', 'calcService', function($scope, calcService){
        console.log('1');
        $scope.user = calcService.user;
        $scope.contact = calcService.cnt;
    }]);
   /* myApp.factory("calculateFactory" , function(){
        var calculateObj = {};
        calculateObj.doSum = function(a,b){
            return parseInt(a)+parseInt(b);
        };
        return calculateObj;
    });
    myApp.service("calculateService", function(){
        this.doSum = function(a,b){
            return parseInt(a) + parseInt(b);
        };
    });*/
    myApp.provider("calcService" , function(){
        console.log('2');
        var username = '';
        var contact = '';

        this.$get = ['$log', function($log){
            console.log('4');
            $log.log('Provider Instantiated..');
            var calculateObj = {};
            calculateObj.user = username;
            calculateObj.cnt = contact;
            return calculateObj;
        }];
        this.setName = function(cnfObj){
            console.log('3');
            username = cnfObj.UserName;
            contact = cnfObj.contactNumber;
        };
    });
    myApp.config(function(calcServiceProvider){
        console.log('5');
        var confObj = {
            UserName : "DemoUser",
            contactNumber : "0123456789"
        };
        calcServiceProvider.setName(confObj);
    });
})(window.angular);
