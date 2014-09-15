'use strict';

var myApp=angular.module('myApp.view1', ['ngRoute']);



myApp.controller('BirthdayCtrl', function($scope) {
	var initbday=new Date(Date.now());
	
	$scope.birthdaytext=initbday.toDateString();
	$scope.genderinput="Male";
	$scope.akanname="-Not implemented-";
	$scope.calculatebdayfromtext = function(birthdaytext)
		{
			return("Not implemented");
		}  // calculatebdayfromtext
});

// facebook factory
var app = angular.module('myApp', []);



app.run(function($rootScope, Facebook) {

  $rootScope.Facebook = Facebook;

})




app.factory('Facebook', function() {

    var self = this;
    this.auth = null;
    this.me=null;

    return {

      getAuth: function() {
        return self.auth;
      },
      getMe : function() {
        FB.api('/me', function(response) {
		    console.log('Good to see you, ' + response.name + '.');
		    self.me=response;
		           
		    });
		return self.me;
	  	},
      login: function() {

        FB.login(function(response) {
          if (response.authResponse) {
            self.auth = response.authResponse;
          } else {
            console.log('Facebook login failed', response);
          }
        })

      },

      logout: function() {

        FB.logout(function(response) {
          if (response) {
            self.auth = null;
          } else {
            console.log('Facebook logout failed.', response);
          }

        })

      }

    }

  })
