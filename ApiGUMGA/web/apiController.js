angular.module('APIGUMGA', [])
    .controller('apiController', ['$scope','$http', function($scope, $http) {
     
    $http.get('http://munif.com.br/avaliacao-api/api/estabelecimento222').
            success(function(data){
                $scope.informacoes = data;
            });
            
}]);