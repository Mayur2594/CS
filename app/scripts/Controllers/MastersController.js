angular.module('CSApp')
.controller('MastersController',function ($scope,$http,$route) {
	
	/* TEARMS AND CONDITIONS--- */
	
	$scope.termsNConditions = []
	var description = [{point:''}];
	$scope.termsNConditions.push({description:description})
	
	
	
	$scope.ListTermsNCondtions = function()
	{
		$http({
              method: 'GET'
              , url: '/api/ListTermsNCondtions/'
              , dataType: 'jsonp'
			}).then(function (response) {
			$scope.termsList = response.data;
		});
	}
	
	
	
	$scope.getTermsDetails = function(termid)
	{
		$http({
              method: 'GET'
              , url: '/api/getTermsDetails/'+termid
              , dataType: 'jsonp'
			}).then(function (response) {
			$scope.termsNConditions = response.data;
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
			$scope.termsNConditions =[];
			$scope.ListTermsNCondtions();
		});
	}
	
	$scope.AddNewRow = function()
	{
		$scope.termsNConditions[0].description.push({point:''})
	}
	
	$scope.RemoveRow = function(index)
	{		
				console.log($scope.termsNConditions[0].description[index])
			if($scope.termsNConditions[0].description[index]._id)
			{
				$http({
					  method: 'DELETE'
					  , url: '/api/RemoveTermDescriptionPoint/'+$scope.termsNConditions[0].description[index]._id
					  , dataType: 'jsonp'
					}).then(function (response) {
					if(response.data.status === 1)
					{
						alert(response.data.message)
					}
					else
					{
						$scope.getTermsDetails($scope.termsNConditions[0]._id)
					}
				});
			}
			else
			{
				
			}
			description.splice(index,1);
	}
	
	/* ---TEARMS AND CONDITIONS*/
	
});
	