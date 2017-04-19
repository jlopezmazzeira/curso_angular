var app = angular.module('MyFirstApp',[]);

/*$scope es una depencia, $http es otra dependencia
  podemos colocarlas de la siguiente forma function($scope,$http)
  si queremos minificar el código lo podemos hacer de la siguiente
  forma ["$scope","$http",function(n,m){}]
  donde n es $scope y m es $http, aqui si importa el orden.
*/
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