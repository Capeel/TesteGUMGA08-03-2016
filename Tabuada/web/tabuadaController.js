angular.module('Tabuada', [])
    .controller('tabuadaController', ['$scope', function($scope) {
            
    $scope.numero;
    $scope.enviar = function(){
        if (numero === "1"){
            $scope.retornaTabuada = ["1x1 =1",
                "1x2 = 2",
                "1x3 = 3",
                "1x4 = 4", 
                "1x5 = 5",
                "1x6 = 6",
                "1x7 = 7",
                "1x8 = 8",
                "1x9 = 9",
                "1x10 = 10"
            ];
        }if(numero === "2"){
            $scope.retornaTabuada = ["2x1 =2",
                "2x2 = 4",
                "2x3 = 6",
                "2x4 = 8", 
                "2x5 = 10",
                "2x6 = 12",
                "2x7 = 14",
                "2x8 = 16",
                "2x9 = 18",
                "2x10 = 20"
            ];
        }if(numero === "3"){
            $scope.retornaTabuada = ["3x1 =3",
                "3x2 = 6",
                "3x3 = 9",
                "3x4 = 12", 
                "3x5 = 15",
                "3x6 = 18",
                "3x7 = 21",
                "3x8 = 24",
                "3x9 = 27",
                "3x10 = 30"
            ];
        }
    };
    
    $scope.retornaTabuada = [];
            
    }]);
   
   
     