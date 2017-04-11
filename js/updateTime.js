/**
 * Created by karthik on 10/4/17.
 */
(function(angular){
    'use strict';
var myApp = angular.module('clockApp',[]);

myApp.controller("clockController",["$scope",function($scope){
    $scope.format = 'dd/MM/yyyy hh:mm:ss a';
    $scope.counter = 1;
}]);
myApp.directive("myCurrentTime",["$interval" , 'dateFilter' , function($interval,dateFilter){
return function link(scope , element, attrs){
var format, timeoutID;

function updateTime() {
    scope.counter++;
    element.text(dateFilter(new Date(), format));
};

console.log(attrs);

scope.$watch(attrs.myCurrentTime, function(value){
    format = value;
    updateTime();
});

scope.$on('$destroy',function(){
    //console.log(scope.counter++);
    $interval.cancel(timeoutID);
});

timeoutID = $interval(function(){
    if(scope.counter >= 5)
    {
        console.log('scope destroyed');

        scope.$destroy();

    }

    updateTime();

},1000);
};
}]);
myApp.directive('myTemplate',[function(){
   return {
       template : 'counter : {{counter}}'
   };
}]);
})(window.angular);
