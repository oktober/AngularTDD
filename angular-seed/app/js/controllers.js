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
            $http.get('data/words.json?' + new Date().getTime()).success(function(data) {
                $scope.words = data;
            })
  }])
  .controller('QuizCtrl', ['$scope', '$http', '$routeParams',
      function ($scope, $http, $routeParams) {
          $http.get('data/words.json?' + new Date().getTime()).success(function(data) {
              var word = data[$routeParams.quizId];

              //this function will randomize which image displays first
              var randomFunction = function(){
                  var theNumber = Math.round(Math.random());
                  if(theNumber === 0){
                      $scope.img1 = word.correct_img;
                      $scope.img2 = word.incorrect_img;
                  }else{
                      $scope.img1 = word.incorrect_img;
                      $scope.img2 = word.correct_img;
                  }
              };
              randomFunction();

              $scope.words = word;
          });
  }])
  ;