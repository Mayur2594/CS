angular.module('CSApp')
.controller('OfficeController',function ($scope,$http,$route,$location,$window) {
	
	var userid = $window.localStorage["userid"];
	
		$scope.checkcurrpage=function(myValue){
			
			if(myValue == null || myValue == 0)
				myValue = 1;
			
		if(!myValue){
		 window.document.getElementById("mypagevalue").value = $scope.currentPage+1;
		 var element = window.document.getElementById("mypagevalue");
		 if(element)
			 element.focus();
		$scope.currentPage = $scope.currentPage;
		$scope.myValue = null;
		}
		
		else{
			$scope.dispval = "";
			if(myValue-1 <= 0){
				$scope.currentPage=0;
			}
			else{
				$scope.currentPage=myValue-1;
				
				if(!$scope.currentPage){$scope.currentPage=0;}
			}
		}};
			
			$scope.pagination = function(listdata)
			{
					$scope.recordsdisplay = [{value:10,name:10},{value:25,name:25},{value:50,name:50},{value:100,name:100},{value:listdata.length,name:'All'}]
					$scope.currentPage = 0;
					$scope.pageSize = 10;
					if($scope.myValue > listdata.length)
					{
						$scope.myValue = 1;
					}
					$scope.numberOfPages = function () {
						return Math.ceil(listdata.length / $scope.pageSize);
					};
			};
	
	
	/* BRANCH DETAILS--- */
	
		$scope.ListBranchs = function()
		{
			$http({
              method: 'GET'
              , url: '/api/ListBranchs/'
              , dataType: 'jsonp'
			}).then(function (response) {
			$scope.branchList = response.data;
			$(".loader").fadeOut("slow");
			$scope.pagination($scope.branchList);
		});
		};
		
		
		$scope.getBranchDetails = function(branchid)
		{
			$http({
              method: 'GET'
              , url: '/api/getBranchDetails/'+branchid
              , dataType: 'jsonp'
			}).then(function (response) {
			$scope.branchDetails = response.data;
		});
		};
		
		
		$scope.DeleteBranch = function(branchid)
	{
		var yes = confirm('Are yuo sure? \n Record will never get you back after delete it')
				if(yes)
				{
					$http({
						  method: 'DELETE'
						  , url: '/api/DeleteBranch/'+branchid
						  , dataType: 'jsonp'
						}).then(function (response) {
						alert(response.data.message);
						$scope.ListBranchs();
					});
				}
	}
		
		$scope.SaveBranchDetails = function()
		{
			$scope.branchDetails[0].createdby = userid
		$http({
			method  : 'POST',
			url     : '/api/SaveBranchDetails/',
			data    : $scope.branchDetails[0] ,
			headers : {'Content-Type': 'application/json'} 
		}).then(function(response) {
			alert(response.data.message);
			$scope.branchDetails =[];
			$scope.ListBranchs();
		});
		};
	
	/* ---BRANCH DETAILS */
	
	
});
	