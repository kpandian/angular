var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  
  $urlRouterProvider.otherwise('/login');
  
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .state('parentstate', {
      url: '/parent',
      templateUrl: 'views/parent.html',
      controller: 'ParentCtrl'
    })
    .state('parentstate.childstate', {
      views: {
        '@parentstate': {
          templateUrl: 'views/child.html',
          controller: 'ChildCtrl'
        }
      }
    });
    
});

angular.module('app')
  .controller('LoginCtrl', LoginCtrl)
  .controller('ParentCtrl', ParentCtrl)
  .controller('ChildCtrl', ChildCtrl);

function LoginCtrl($scope) {
  $scope.title = 'Login';
}

function ParentCtrl($scope) {
  $scope.title = 'Parent State';
}

function ChildCtrl($scope) {
  $scope.title = 'Child State';
}