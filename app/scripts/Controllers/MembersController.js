angular.module('CSApp')
.controller('MembersController',function ($scope,$http,$route,$location) {
	
	
	var url = window.location.href;
	var qparts = url.split("?");
	var passvar = qparts[1];
	
	$scope.RedirectToForm = function(redirectpath)
	{
		$location.search('')
		$location.path(redirectpath);
	};
	
	$scope.clear = function () {
		angular.element("input[type='file']").val(null);
		document.getElementById("imgpanel").src = '';
	};
	
	$scope.PassFileValue = function () {
		
			var selectedfile = angular.element("input[type='file']")[0].files;

		$('imgbtn').css("display", "block");
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imgpanel')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };
            reader.readAsDataURL(selectedfile[0]);
	}; 
	
	
});
	