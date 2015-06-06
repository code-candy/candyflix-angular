'use strict';

/**
 * @ngdoc function
 * @name candyflixAngularApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the candyflixAngularApp
 */
angular.module('candyflixAngularApp')
  .controller('WatchlistCtrl', function ($scope, Watchlist) {

    Watchlist.load();

    $scope.watchlist = Watchlist.movies;

    $scope.remove = function(movie) {
      Watchlist.delete(movie);
    }


  });
