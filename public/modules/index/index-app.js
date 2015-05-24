(function (angular, undefined) {
    'use strict';
    
    angular.module('indexApp', [
            'ngRoute',
            'indexControllers'])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
            .when('/index', {
                templateUrl: 'index.tpl.html'
            })
            .otherwise({
                redirectTo: '/index'
            });
        }]
    );
})(angular);
