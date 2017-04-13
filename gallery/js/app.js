/**
 * Created by karthik on 12/4/17.
 */
var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});