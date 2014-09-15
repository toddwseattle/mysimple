'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.Facebook'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/view1',{
  	templateUrl: 'view1/view1.html',
  	controller: 'BirthdayCtrl'
  }).otherwise({redirectTo: '/view1'});
}]);

//facebook factory put it here see if it works better

var app = angular.module('myApp.Facebook', []);



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

  });

// facebook sdk init stuff

window.fbAsyncInit = function() {
  FB.init({
    appId: '467875209900414'
  });
};

// Load the SDK Asynchronously
(function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));
