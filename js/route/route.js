
angular.module("projetoAcademico").config(["$routeProvider", function($routeProvider){

    $routeProvider.when("/",{
        templateUrl:"view/home.html"
    });

    $routeProvider.when("/cadastroAluno",{
        templateUrl:"view/cadastro-aluno.html",
        controller:"AlunoCtrl"
    });


    $routeProvider.when("/listagemAluno",{
        templateUrl:"view/listar-aluno.html",
        controller:"AlunoCtrl"
    });


    $routeProvider.when("/listarDisciplina",{
        templateUrl:"view/listar-disciplina.html",
        controller:"DisciplinaCtrl"
    });


    $routeProvider.when("/cadastroDeCurso",{
        templateUrl:"view/cadastro-curso.html",
        controller: "CursoCtrl"
    });


    $routeProvider.when("/cadastroDisciplina",{
        templateUrl:"view/cadastro-disciplina.html",
        controller:"DisciplinaCtrl"
    });


}]);