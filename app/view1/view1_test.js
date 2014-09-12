'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('BirthdayCtrl controller and input field', function(){

    it('should define the controller', inject(function($controller) {
      //spec body
      var 	mockScope={},
      		BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
      expect(BirthdayCtrl).toBeDefined();
    }));

    it('should define a birthdaytext in the scope', inject(function($controller) {
      //spec body
      var mockScope={},
          BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
      expect(mockScope.birthdaytext).toBeDefined();
    }));

    it('should define a genderinput in the scope', inject(function($controller) {
      //spec body
      var mockScope={},
          BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
      expect(mockScope.genderinput).toBeDefined();
    }));

    it('should define an akanname fieldin the scope: ', inject(function($controller) {
      //spec body
      var mockScope={},
          BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
      expect(mockScope.akanname).toBeDefined();
    }));
  });


  describe("it should have calculatebdayfromtext()",function(){
    it('should define a calculatebdayfromtext in the scope', inject(function($controller) {
      //spec body
      var mockScope={},
          BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
      expect(mockScope.calculatebdayfromtext).toBeDefined();
    }));
  });
});