angular.module('ToDoList',['LocalStorageModule'])
.service('ToDoService',function(localStorageService) {
	
	this.key = 'angular-todolist';
	if (localStorageService.get(this.key)) {
		this.activities = localStorageService.get(this.key);
	} else{
		this.activities = [];
	}

	this.addAct = function(newAct) {
		this.activities.push(newAct);
		this.updaLocalStorage();
	}

	this.updaLocalStorage = function() {
		localStorageService.set(this.key,this.activities);
	}

	this.clean = function() {
		this.activities = [];
		this.updaLocalStorage();
		return this.getAll();
	}

	this.getAll = function() {
		return this.activities;
	}

	this.removeItem = function(item) {
		this.activities = this.activities.filter(function(actvty) {
			return actvty !== item;
		});
		this.updaLocalStorage();
		return this.getAll();
	}
})
.controller('ToDoController',function($scope,ToDoService) {
	
	$scope.todo = ToDoService.getAll();
	$scope.newAct = {};

	$scope.addAct = function() {
		ToDoService.addAct($scope.newAct);
		$scope.newAct = {};
	}

	$scope.removeActv = function(item) {
		$scope.todo = ToDoService.removeItem(item);
	}

	$scope.clean = function() {
		$scope.todo = toDoService.clean();
	}
});