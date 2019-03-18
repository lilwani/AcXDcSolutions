var dets=angular.module("detailsModule",[])
	   	.controller("detailsCtrl",['$scope','$rootScope',function($scope,$rootScope){
	   			$scope.namecred="";
				$scope.passcred="";
				$scope.submit=function()
	   				{
	   					console.log("User Registered !! ...redirecting to Login page ..");
	   					$rootScope.username=$scope.namecred;
	   					$rootScope.password=$scope.passcred;
	   					debugger;
	   					console.log($rootScope.username+" "+$rootScope.password);
	   					debugger;
	   					window.location="#/Login";
	   				};
	   				
				}]);
