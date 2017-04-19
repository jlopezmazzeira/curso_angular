var app = angular.module('ToDoList',['LocalStorageModule']);

app.controller('ToDoController',function($scope,localStorageService) {

	if (localStorageService.get('angular-todolist')) {
		$scope.todo = localStorageService.get('angular-todolist');
	} else{
		$scope.todo = [];
	}
	
	/*$scope.$watch(function() {
		return $scope.newAct;
	}, function(newValue,oldValue) {
		
	});*/
	
	//Watch para las colecciones
	$scope.$watchCollection('todo', function(newValue,oldValue) {
		localStorageService.set('angular-todolist',$scope.todo);
	});

	$scope.addAct = function() {
		$scope.todo.push($scope.newAct);
		$scope.newAct = {};
	}

	$scope.clean = function() {
		$scope.todo = [];
	}
});