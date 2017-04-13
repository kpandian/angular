/**
 * Created by karthik on 12/4/17.
 */
var pollApp = angular.module('pollApp',['ui.router']);

pollApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
    $stateProvider
        .state('login', {
            url: '/login',
            controller: "loginController",
            templateUrl: 'views/login.html'
        })
        .state('home', {
            url: '/home',
            controller: 'homeController',
            templateUrl: 'views/home.html'
        })
        .state('home.admin', {
            views: {
                '@home': {
                    templateUrl: 'views/admin.html',
                    controller: 'adminController'
                }
            }
        });
});
