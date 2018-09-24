angular.module('CSApp')
.controller('EmployeesController', ['$scope','$http','$route','$location','$window', 'Upload',function ($scope,$http,$route,$location,$window,Upload) {
	
	
	$scope.RedirectToForm = function(redirectpath)
	{
		$location.path(redirectpath);
	};
	
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
								$(".loader").fadeOut("slow");
					$scope.numberOfPages = function () {
						return Math.ceil(listdata.length / $scope.pageSize);
					};
			};
	
	 $scope.clear = function () {
		document.getElementById('imgpanel').src = null;
	};
	
	
	
	
	
	
	$scope.ListEmployees = function()
		{
			$http({
              method: 'GET'
              , url: '/api/ListEmployees/'
              , dataType: 'jsonp'
			}).then(function (response) {
			$scope.EmployeesList = response.data;
			$scope.pagination($scope.EmployeesList);
		});
		};
		
		
	
	
	$scope.SaveEmployeeDetails = function()
	{
		 if ($scope.empdetails.file.$valid && $scope.file) {
			 var passeddata = {file: $scope.file, employeedetails:$scope.employee[0]}
		 }
		 else
		 {
			  var passeddata = {employeedetails:$scope.employee[0]}
		 }
			 $scope.employee[0].createdby ="gdhd73dbddbdj"
			 $scope.employee[0].profilepic =""
        Upload.upload({
            url: '/api/SaveEmployeesDetails',
            data: passeddata
        }).then(function (resp) {
            //alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            alert('Record inserted successfully');
			$scope.RedirectToForm('/EmployeeDetails');
        }, function (resp) {
            //alert('Error status: ' + resp.status);
            alert('Something went wrong, Please try again!');
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
           // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        }); 
	};
	
		
}]);
	