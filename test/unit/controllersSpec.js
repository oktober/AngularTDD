'use strict';

/* jasmine specs for controllers go here */
describe('fromScratch controllers', function() {
    var $scope = null;
    var ctrl = null;

    beforeEach(module('fromScratch'));

    beforeEach(inject(function($rootScope, $controller) {
        //create a scope object for us to use.
        $scope = $rootScope.$new();

        //now run that scope through the controller function,
        //injecting any services or other injectables we need.
        ctrl = $controller('TestController', {
            $scope: $scope
        });
    }));

    describe('TestController', function(){

        it('should list 2 users', function() {
            expect($scope.users.length).toBe(2);
        });
    });

    /*describe('test changeFirstUsersFirstName function', function(){
        it('should change the first users name', inject(function($controller){
            var
        }))
    });*/
});