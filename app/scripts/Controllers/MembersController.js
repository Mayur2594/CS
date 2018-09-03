angular.module('CSApp')
.controller('MembersController',function ($scope,$http,$route,$location) {
	
	
	$scope.RedirectToForm = function(redirectpath)
	{
		$location.path(redirectpath);
	};
	
});
	