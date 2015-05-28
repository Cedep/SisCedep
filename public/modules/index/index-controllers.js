(function (angular, undefined) {
    'use strict';
    
    angular.module('indexControllers', ['indexServices'])
        .controller('IndexController', IndexController);

	IndexController.$inject = ['$http', '$window', 'LoginService'];

    function IndexController($http, $window, LoginService) {
        var vm = this;

        vm.login = login;        

        vm.isLogado = LoginService.isLogado;

        vm.logout = LoginService.logout;

        vm.getUserName = LoginService.getUserName;

        function login() {
            LoginService.login(vm.usuarioLogin, vm.senhaLogin, function() {
                vm.usuarioLogin = null;
                vm.senhaLogin = null;
            });
        }
    }
})(angular);
