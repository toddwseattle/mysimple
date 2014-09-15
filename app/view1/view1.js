'use strict';

var myApp=angular.module('myApp.view1', ['ngRoute','myApp.Facebook']);



myApp.controller('BirthdayCtrl', function($scope,Facebook) {
	var initbday=new Date(Date.now());
	
	//$scope.birthdaytext="not implemented";
	$scope.birthdaytext=initbday.toDateString();
	$scope.genderinput="Male";
	$scope.akanname="-Not implemented-";
	Facebook.login();
	Facebook.setMe();
	$scope.me=Facebook.getMe();

	$scope.gogetme=function(){
		$scope.me=Facebook.getMe();
	}
/*

*/
	$scope.boys=["Kwasi","Kwadwo", "Dwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	$scope.calculatebdayfromtext = function(birthdaytext)
		{
			var bday=new Date(birthdaytext);
			if (isNaN(bday))
					{return("invalid date!");}
			else
				{	console.log($scope.boys[bday.getDay()]);
					$scope.akanname=($scope.boys[bday.getDay()]); }
		}  // calculatebdayfromtext
});


