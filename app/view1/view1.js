'use strict';

var myApp=angular.module('myApp.view1', ['ngRoute']);



myApp.controller('BirthdayCtrl', function($scope) {
	var initbday=new Date(Date.now());
	
	$scope.birthdaytext="not implemented";
	//$scope.birthdaytext=initbday.toDateString();
	$scope.genderinput="Male";
	$scope.akanname="-Not implemented-";
	$scope.calculatebdayfromtext = function(birthdaytext)
		{
			return("Not implemented");
		}  // calculatebdayfromtext
});

// facebook factory

