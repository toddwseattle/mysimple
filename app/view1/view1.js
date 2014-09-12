'use strict';

var myApp=angular.module('myApp.view1', ['ngRoute']);



myApp.controller('BirthdayCtrl', function($scope) {
	var initbday=new Date(Date.now());

	$scope.birthdaytext=initbday.toDateString();
	$scope.genderinput="Male";
	$scope.calculatebdayfromtext = function(birthdaytext)
		{
			return("Not implemented");
		}  // calculatebdayfromtext
});