angular.module('CSApp')
.controller('EmployeesController',function ($scope,$http,$route,$location) {
	
	
	$scope.RedirectToEmpForm = function()
	{
		$location.path( "/EmployeeForm" );
	};
	
});
	