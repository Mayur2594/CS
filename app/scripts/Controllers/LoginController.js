angular.module('CSApp')
.controller('LoginController',function ($scope,$http,$route,$location) {
	
	
	
	$scope.showHidePassword = function()
  {
		var passwordfield = document.getElementById("password");
		if (passwordfield.type === "password") {
			passwordfield.type = "text";
		}
		else {
			passwordfield.type = "password";
		}
		var elm = document.getElementById("togglcls");
		elm.classList.toggle("glyphicon-eye-close");
		
  };
  
	$scope.forgotpassword = function(degree)
	{
			var elm = document.getElementById("psfld");
			elm.classList.toggle("hiddenelem");
			console.log(elm.classList)
			document.getElementById("flippanel").style.transform = "rotateY("+degree+"deg)";
	};
	
	$scope.authUser = function()
	{				
			$http({
			method  : 'POST',
			url     : '/api/authUser',
			data    : $scope.userDetails ,
			headers : {'Content-Type': 'application/json'} 
		}).then(function(response) {
			if(response.data.success === true)
			{
				$location.path('/Dashboard');
			}
			if(response.data.success === false)
			{
				$scope.errormsg = response.data.message
			}
		});
	};
		
	
	
});
	