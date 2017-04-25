
angular.module("projetoAcademico").controller("CursoCtrl",function($scope, AppService, $location) {

    $scope.cursos = [];
    $scope.pag = 1;
    $scope.num = 5;

    $scope.frente = function (pagina) {

        $scope.pag += 1;

        var sucesso = function (dados) {
            $scope.cursos = dados.data;
        };

        var erro = function (err) {
            $scope.pag += $soope.pag -1;
            alert("Erro Paginar");
        };


        AppService.listarCurso($scope.pag,$scope.num).then(sucesso,erro);
    };


    $scope.voltar = function () {

        if ($scope.pag > 1) {
            $scope.pag -= 1;
        }

        var sucesso = function (dados) {
            $scope.cursos = dados.data;
        };

        var erro = function (err) {
            $scope.pag += $soope.pag + 1;
            alert("Erro Paginar");
        };


        AppService.listarCurso($scope.pag,$scope.num).then(sucesso,erro);
    };



    $scope.salvarCurso = function (curso) {

        AppService.salvarCurso(curso).then(function(dados){
            alert("cadastrado");
            $location.url("/cadastroDeCurso");
        }, function (err) {
            alert("Deu erro");

        });

    };

    $scope.listarCursos = function (pag,num)  {

        var sucesso = function (dados) {
            $scope.cursos = dados.data;
        };

        var erro = function (err) {
            alert("Erro listar Cursos");
        }

        AppService.listarCurso(pag,num).then(sucesso,erro);
    }

    // listar alunos
    $scope.listarAlunos = function (pag,num) {

        var sucesso = function (dados) {
            $scope.alunos = dados.data;
        };

        var erro = function (err) {
            alert("Erro listar Alunos");
        }

        AppService.listarAlunos(pag,num).then(sucesso,erro);
    }



    $scope.listarCursos($scope.pag,5);
});