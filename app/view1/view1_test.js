'use strict';

describe('myApp.view1 module', function() {
  var FBservice;
  beforeEach(module('myApp.view1',[myApp.Facebook]));



  describe('BirthdayCtrl controller and input field', function(){

    it('should have Facebook Service as a dependency',inject(function($controller,_Facebook_) {
      //spec body
      var mFacebook=_Facebook_;
      var   mockScope={}
          BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope, Facebook:mFacebook});
      expect(mFacebook).toBeDefined();
      console.log("**Facebook is defined?*")
    })
      );
  //   it('should define the controller', inject(function($controller) {
  //     //spec body
  //     var 	mockScope={},
  //     		BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
  //     expect(BirthdayCtrl).toBeDefined();
  //   })); 

  //   it('should define a birthdaytext in the scope', inject(function($controller) {
  //     //spec body
  //     var mockScope={},
  //         BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
  //     expect(mockScope.birthdaytext).toBeDefined();
  //   }));

  //   it('should define a genderinput in the scope', inject(function($controller) {
  //     //spec body
  //     var mockScope={},
  //         BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
  //     expect(mockScope.genderinput).toBeDefined();
  //   }));

  //   it('should define an akanname fieldin the scope: ', inject(function($controller) {
  //     //spec body
  //     var mockScope={},
  //         BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
  //     expect(mockScope.akanname).toBeDefined();
  //   }));


  //   it("should define a populatefromfb function",inject(function($controller){
  //     var mockScope={},
  //         BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
  //     expect(mockScope.populatefromfb).toBeDefined();        
  //   }));
  // });


  // describe("it should have calculatebdayfromtext()",function(){
  //   it('should define a calculatebdayfromtext in the scope', inject(function($controller) {
  //     //spec body
  //     var mockScope={},
  //         BirthdayCtrl = $controller('BirthdayCtrl',{$scope:mockScope});
  //     expect(mockScope.calculatebdayfromtext).toBeDefined();
  //   }));
  });
});