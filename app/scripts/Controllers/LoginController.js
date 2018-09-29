angular.module('CSApp')
.controller('LoginController',function ($scope,$http,$route,$location,$window,$timeout) {
	
	
  $timeout( function(){
            $scope.test1 = "Hello World!";
        }, 5000 );

        //time
        $scope.time = 60;
        
        //timer callback
        var timer = function() {
            if( $scope.time > 0 ) {
                $scope.time -= 1;
                $timeout(timer, 1000);
            }
			
        }
        
        //run!!
       
	
	
	$scope.showHidePassword = function(elemid)
  {
		var passwordfield = document.getElementById(elemid);
		if (passwordfield.type === "password") {
			passwordfield.type = "text";
		}
		else {
			passwordfield.type = "password";
		}
		var elm = document.getElementById("togglcls");
		elm.classList.toggle("glyphicon-eye-close");
		
  };
  
	$scope.forgotpasswordWindow = function(degree)
	{
			var elm = document.getElementById("psfld");
			elm.classList.toggle("hiddenelem");
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
	
	
	$scope.ResetPassword = function()
	{			
			$http({
			method  : 'POST',
			url     : '/api/ResetPassword',
			data    : $scope.usersPassworddata ,
			headers : {'Content-Type': 'application/json'} 
		}).then(function(response) {
			alert(response.data.message);
			location.reload();
		});
	};
	
	$scope.arrayObj = [{otp:''},{otp:''},{otp:''},{otp:''},{otp:''},{otp:''}];
	$scope.focusIndex = 0;
	$scope.ForgotPassword = function()
	{		

		 $http({
			method  : 'POST',
			url     : '/api/ForgotPassword',
			data    : $scope.user ,
			headers : {'Content-Type': 'application/json'} 
		}).then(function(response) {
			
			if(response.data.success === true)
			{
				$scope.message =  response.data.message;
				$('#myModallOTP').modal({
                        backdrop: 'static',
                        keyboard: true, 
                        show: true
                });
				 $timeout( function(){
					 $scope.showbtn = true;
							$timeout(timer, 1000); 
					}, 20000 );
				 
	
			}
			else
			{
				alert(response.data.message)
			}
		}); 
	};

		$scope.SetFocus = function(index)
		{
			$scope.focusIndex = index;
		};
		
		$scope.SubmitOtpAnResetpassword = function()
		{
			var OTP = '';
			$scope.arrayObj.map(function(indval)
			{
				OTP = OTP+''+indval.otp;
			});
			
			$http({
              method: 'GET'
              , url: '/api/verifyOTP/'+OTP.trim()
              , dataType: 'jsonp'
			}).then(function (response) {
				if(response.data.status === 0)
				{
					$('#myModallOTP').modal({show: false});
					$('#myModallNewPassword').modal({
                        backdrop: 'static',
                        keyboard: true, 
                        show: true
                });
				}
				else
				{
					alert(response.data.message);
				}
		});
		};
		
	
	
}).directive('customAutofocus', function() {
  return{
         restrict: 'A',

         link: function(scope, element, attrs){
           scope.$watch(function(){
             return scope.$eval(attrs.customAutofocus);
             },function (newValue){
               if (newValue == true){
                   element[0].focus();
               }
           });
         }
     };
})
;

	