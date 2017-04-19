angular.module('MyFirstApp',[])
.run(function($rootScope) {
	$rootScope.nombre = "Jesus";
})
.controller('FirstController',function($scope) {
	$scope.nombre = "Rafael";
})
.controller('ChildController',function($scope) {

});