(function (angular, undefined) {
    'use strict';
    
    angular.module('indexServices', [])
    .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', '$window'];

    function LoginService($http, $window) {
        var that = this;

        var factory = {};

        factory.login = function (login, senha, successCallback) {
            $http.post('/api/v1/login', {login: login, senha: senha})
            .success(function (response){               
                that.userName = login; 
                that.tokenAutenticacao = response.token;                
                successCallback();
            })
            .error(function (data) {
                $window.alert(data);
            });
        };

        factory.isLogado = function() {
            return !!that.tokenAutenticacao;
        };

        factory.getUserName = function() {
            return that.userName;
        };

        factory.logout = function() {
            that.userName = null;
            that.tokenAutenticacao = null;
        };

        return factory;
    }
})(angular);