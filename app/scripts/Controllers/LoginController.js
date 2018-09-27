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
						$scope.userDetails.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI1YmFjYzI0NzMzZWEzYTA5ODRhZGFiYzgiLCJpYXQiOjE1MzgwNTA4NzUsImV4cCI6MTUzODA1MDk5NX0.YVGk473oC7ocATR2e9hI2u3lAsR5KY2qSaJxjADeyo4"
			$http({
			method  : 'POST',
			url     : '/api/authUser',
			data    : $scope.userDetails ,
			headers : {'Content-Type': 'application/json'} 
		}).then(function(response) {
			console.log(response.data);
			var d = new Date();
			d.setTime(d.getTime() + (1*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			document.cookie = "token=" + response.data.token + ";" + expires + ";path=/";
			document.cookie = "username="+response.data.data.username+";" + expires + ";path=/";
			document.cookie = "id="+response.data.data.id+";" + expires + ";path=/";
			document.cookie = "role="+response.data.data.role+";" + expires + ";path=/";
			document.cookie = "profilepic="+response.data.data.profilepic+";" + expires + ";path=/";
			$location.path('/Dashboard');
		});
	};
		
	
	
});
	