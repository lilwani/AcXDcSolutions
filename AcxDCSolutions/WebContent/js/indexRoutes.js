//<reference path="./userDetails.js">
//<reference path="./appliances.js">

angular.module("mainModule",['ngRoute','appliances','detailsModule'])
		.config(function($routeProvider){
			$routeProvider
			.when("/",{
				template: "<h1>{{txt}}</h1>"
			})
			.when("/Login",{
					templateUrl: "./demo.html",
					controller: "mainCtrl"
			})
			.when("/User",{
					templateUrl: "./userDetails.html",
					controller: "detailsCtrl"
			})
			.when("/Services",{
					templateUrl: "./ComplaintPage.html", 
					controller: "myAppls"
			})
			.otherwise({redirectTo:"/"});
		})
		.run(function($rootScope){
			$rootScope.txt="I am ROOT !";
			$rootScope.username="";
			$rootScope.password="";			
		})
		.controller("mainCtrl",function($scope,$rootScope){
				$scope.mssg="Yay na yay mate !!";

				$scope.submit=function()
				{
					console.log($rootScope.username+" "+$rootScope.password);
				}
		});
			