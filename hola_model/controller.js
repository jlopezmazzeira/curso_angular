var app = angular.module('MyFirstApp',[]);

app.controller('FirstController',function($scope) {
	//$scope.nombre = 'Jesus';
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: 'Buen tutorial',
			username: 'usuario_1'
		},
		{
			comentario: 'Mal tutorial',
			username: 'usuario_2'
		}
	];

	$scope.agregarComentario = function() {
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {}:
	}
});