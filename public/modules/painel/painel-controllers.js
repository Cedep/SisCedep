(function (angular, undefined) {
    'use strict';
    
    angular.module('indexControllers', [])
        .controller('IndexController', IndexController);

	IndexController.$inject = ['$http'];

    function IndexController($http) {
        var vm = this;

        vm.incluirAluno = incluirAluno;

        atualizaListaAlunos();

        function atualizaListaAlunos() {
            $http.get('/api/v1/alunos').success(function (response){                
                vm.alunos = response;
            });
        }

        function incluirAluno() {
            var aluno = {
                nome: vm.nome
            }

            $http.post('/api/v1/alunos', aluno).success(function (){
                vm.nome = '';
                atualizaListaAlunos();
            });            
        }
    }
})(angular);
