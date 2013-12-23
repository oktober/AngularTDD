'use strict';

/* jasmine specs for controllers go here */
describe('fromScratch controllers', function() {
    beforeEach(module('fromScratch'));

    describe('TestController', function(){

        it('should list 2 users', inject(function($controller) {
            var scope = {},
                ctrl = $controller('TestController', { $scope: scope });

            expect(scope.users.length).toBe(2);
        }));
    });
});