'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeCtrl', [function() {

    }])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('WordsCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('data/words.json').success(function(data) {
                $scope.words = data;
            })
  }]);