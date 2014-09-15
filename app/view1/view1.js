'use strict';

var myApp=angular.module('myApp.view1', ['ngRoute']);



myApp.controller('BirthdayCtrl', function($scope,$http) {
	var initbday=new Date(Date.now());
	$http({method: 'GET', url: 'https://graph.facebook.com/me'}).
	    success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	      console.log("success");
	      console.log("data:"+data.toString());
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	      console.log("failure");
	      console.log("Status"+status.toString());
	    });
	$scope.birthdaytext=initbday.toDateString();
	$scope.genderinput="Male";
	$scope.calculatebdayfromtext = function(birthdaytext)
		{
			return("Not implemented");
		}  // calculatebdayfromtext
});