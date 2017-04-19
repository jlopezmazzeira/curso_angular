var app = angular.module('MyFirstApp',[]);

app.controller('FirstController',function($scope,$http) {
	$scope.posts = []; 
	$http({
	  method: 'GET',
	  url: 'http://jsonplaceholder.typicode.com/posts'
	}).then(function successCallback(response) {
		$scope.posts = response.data;
	    console.log(response);
	}, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	});

	$scope.addPost = function() {
		data = {
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		};
		$http.post(
			'http://jsonplaceholder.typicode.com/posts', 
			data
		).then(function successCallback(response) {
			$scope.posts.push($scope.newPost);
			$scope.newPost = {};
		},function errorCallback(response) {
			console.log(response);
		});
	}
});