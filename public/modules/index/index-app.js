(function (angular, undefined) {
    'use strict';
    
    angular.module('indexApp', [
            'ngRoute',
            'indexControllers',
            'painelControllers'])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
            .when('/index', {
                templateUrl: 'index.tpl.html'
            })
            .when('/painel', {
                templateUrl: '../painel/painel.tpl.html'
            })
            .otherwise({
                redirectTo: '/index'
            });
        }]
    );
})(angular);
