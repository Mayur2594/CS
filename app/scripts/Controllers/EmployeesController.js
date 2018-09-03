angular.module('CSApp')
.controller('EmployeesController',function ($scope,$http,$route,$location) {
	
	
	$scope.RedirectToForm = function(redirectpath)
	{
		$location.path(redirectpath);
	};
	
});
	