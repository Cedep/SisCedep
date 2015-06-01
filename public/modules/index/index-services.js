(function (angular, undefined) {
    'use strict';
    
    angular.module('indexServices', [])
    .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', '$window'];

    function LoginService($http, $window) {
        var that = this;

        var factory = {};

        factory.login = function (login, password, successCallback) {
            $http.post('/api/v1/login', {login: login, password: password})
            .success(function (response){               
                that.userName = login; 
                successCallback();
            })
            .error(function (data) {
                $window.alert(JSON.stringify(data));
            });
        };

        factory.isLogado = function() {
            return !!that.userName;
        };

        factory.getUserName = function() {
            return that.userName;
        };

        factory.logout = function(successCallback) {            
            $http.post('/api/v1/logout')
            .success(function (){               
                that.userName = null;
                successCallback();
            })
            .error(function (data) {
                $window.alert(JSON.stringify(data));
            });
        };

        return factory;
    }
})(angular);