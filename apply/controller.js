angular.module('mainModule',[])
	.controller('FirstController',function($scope) {
		$scope.nombre = "Jesus";
		setTimeout(function() {
			//$scope.$digest();
			//Forma correcta para aplicar actualizaciones
			$scope.$apply(function() {
				$scope.nombre = 'Jesus Lopez';
			});
		}, 2000);
	})
