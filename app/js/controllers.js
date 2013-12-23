'use strict';

/* Controllers */

var scratch = angular.module('fromScratch');

scratch.controller('TestController',
    function($scope){
        $scope.users =
               [
                   {firstName: 'Jane', lastName: 'Doe', age: 29},
                   {firstName: 'John', lastName: 'Doe', age: 32}
               ]
    }
);