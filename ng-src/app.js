angular.module('CustomDirective',[])
.controller('AppCtrl',function($scope,$http) {
	$http({
	  method: 'GET',
	  url: 'https://api.github.com/users/urielhdz/repos'
	}).then(function successCallback(response) {
		$scope.repos = response.data;
	}, function errorCallback(response) {
		console.log(response);
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	});
});