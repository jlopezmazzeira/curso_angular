var app = angular.module('MyFirstApp',[]);

app.controller('FirstController',function($scope,$http) {
	$scope.posts = []; 
	$scope.loading = true;
	$http({
	  method: 'GET',
	  url: 'http://jsonplaceholder.typicode.com/posts'
	}).then(function successCallback(response) {
		$scope.posts = response.data;
		$scope.loading = false;
	}, function errorCallback(response) {
		$scope.loading = false;
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	});
});