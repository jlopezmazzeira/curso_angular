angular.module('CustomDirective',[])
.directive('backImg',function() {
	return function(scope,element,attrs) {
		attrs.$observe('backImg',function(value) {
			element.css({
				'background' : "url("+value+")",
				'background-position': 'center',
				'background-size': 'cover'
			});
		});
	}
})
.controller('AppCtrl',function($scope,$http) {
	$http({
	  method: 'GET',
	  url: 'https://api.github.com/users/codigofacilito/repos'
	}).then(function successCallback(response) {
		$scope.repos = response.data;
	}, function errorCallback(response) {
		console.log(response);
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	});
});