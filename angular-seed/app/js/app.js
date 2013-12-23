'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'WordsCtrl'})
  .when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'})
  .when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'})
  .when('/quiz/:quizId', {templateUrl: 'partials/quiz.html', controller: 'QuizCtrl'})
  .otherwise({redirectTo: '/'});
}]);
