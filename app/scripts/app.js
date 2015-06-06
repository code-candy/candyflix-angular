'use strict';

angular
  .module('candyflixAngularApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/starter.html',
        controller: 'StarterCtrl'
      })     
      
      .otherwise({
        redirectTo: '/'
      });
  });
