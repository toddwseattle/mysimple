'use strict';

/* jasmine specs for controllers go here */
describe('Birthday controllers', function() {

  describe('Birthday Functions', function(){

    beforeEach(module('myApp'));

    it('should create "birthdays" model with a current birthday', 
    		inject(function($controller) {
      var scope = {},
          ctrl = $controller('BirthdayCtrl', {$scope:scope});
      expect(scope.birthday).toBeDefined();
    
    }));


  });
});