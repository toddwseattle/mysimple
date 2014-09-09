'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should define the controller', inject(function($controller) {
      //spec body
      var 	mockScope={},
      		BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
      expect(BirthdayCtrl).toBeDefined();
    }));

    it('should define a birthday in the scope', inject(function($controller) {
      //spec body
      var mockScope={},
          BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
      expect(mockScope.birthday).toBeDefined();
    }));
  });
});