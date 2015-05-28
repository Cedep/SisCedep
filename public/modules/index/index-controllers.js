(function (angular, undefined) {
    'use strict';
    
    angular.module('indexControllers', [])
        .controller('IndexController', IndexController);

	IndexController.$inject = ['$http', '$window'];

    function IndexController($http, $window) {
        var vm = this;

        vm.usuarios = {
            tiago: '111111',
            andre: '111111',
            marcus: '111111'
        }

        vm.logar = logar;

        function logar() {
            $http.post('/api/v1/login', {login: vm.usuarioLogin, senha: vm.senhaLogin})
            .success(function (response){                
                vm.token = response.token;
            })
            .error(function (data) {
                $window.alert(JSON.stringify(data));
            })
            //vm.usuarioLogado = vm.usuariologin;
        }

        // vm.incluirAluno = incluirAluno;

        // atualizaListaAlunos();

        // function atualizaListaAlunos() {
        //     $http.get('/api/v1/alunos').success(function (response){                
        //         vm.alunos = response;
        //     });
        // }

        // function incluirAluno() {
        //     var aluno = {
        //         nome: vm.nome
        //     }

        //     $http.post('/api/v1/alunos', aluno).success(function (){
        //         vm.nome = '';
        //         atualizaListaAlunos();
        //     });            
        // }
    }
})(angular);
