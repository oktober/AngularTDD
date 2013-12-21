'use strict';

/* Directives */

var scratch = angular.module('fromScratch');
scratch.directive('fullName', function(){
        return {
            restrict: 'A',
            link: function(scope, elem, attrs){
                console.log("Hey! It's working!");
            }
        }
    });