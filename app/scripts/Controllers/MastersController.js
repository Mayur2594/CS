angular.module('CSApp')
.controller('MastersController',function ($scope,$http,$route) {
	
	/* TEARMS AND CONDITIONS--- */
	
	$scope.termsNConditions = []
	var description = [{point:''}];
	$scope.termsNConditions.push({description:description})
	
	$scope.AddNewRow = function()
	{
		description.push({point:''})
	}
	$scope.RemoveRow = function(index)
	{
			description.splice(index,1);
	}
	
	$scope.ListTermsNCondtions = function()
	{
		$http({
              method: 'GET'
              , url: '/api/ListTermsNCondtions/'
              , dataType: 'jsonp'
			}).then(function (response) {
			console.log(response);
		});
	}
	
	$scope.SaveTermsDetails = function()
	{
		$scope.termsNConditions[0].createdby = '67evd73b783gd3b37bd73b'
		$http({
			method  : 'POST',
			url     : '/api/SaveTermsDetails/',
			data    : $scope.termsNConditions[0] ,
			headers : {'Content-Type': 'application/json'} 
		}).then(function(response) {
			alert(response.data.message);
			$scope.ListTermsNCondtions();
		});
	}
	
	/* ---TEARMS AND CONDITIONS*/
	
});
	