
angular.module("projetoAcademico").controller("AlunoCtrl", function($scope, AppService, $location){

    $scope.cursos = [];
    $scope.alunos = [];
    $scope.pag = 1;
    $scope.num = 5;


    $scope.salvar = function (aluno){

        var sucesso = function (dados) {
            $location.url("/listagemAluno");
        };

        var erro = function (err) {
            alert("Erro salvar Aluno");
        }
        AppService.cadastroAluno(aluno).then(sucesso,erro);
    }


    $scope.frente = function (pagina) {

        $scope.pag += 1;

        var sucesso = function (dados) {
            $scope.alunos = dados.data;
        };

        var erro = function (err) {
            $scope.pag += $soope.pag -1;
            alert("Erro Paginar");
        };


        AppService.listarAluno($scope.pag,$scope.num).then(sucesso,erro);
    };

    $scope.voltar = function () {

        if ($scope.pag > 1) {
            $scope.pag -= 1;
        }

        var sucesso = function (dados) {
            $scope.alunos = dados.data;
        };

        var erro = function (err) {
            $scope.pag += $soope.pag + 1;
            alert("Erro Paginar");
        };


        AppService.listarAluno($scope.pag,$scope.num).then(sucesso,erro);
    };

    $scope.listarAlunosPorCurso = function (c) {

        var sucesso = function (dados) {
            $scope.pag = 1;
            $scope.alunos = dados.data;
        };

        var erro = function (err) {
            alert("Erro Paginar");
        };

        AppService.listarAlunoPorCurso(c.cursoId).then(sucesso,erro);

    }

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

        AppService.listarAluno(pag,num).then(sucesso,erro);
    }

    $scope.listarCursos(1,2000);
    $scope.listarAlunos($scope.pag,$scope.num);

});
