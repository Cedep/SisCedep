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
    )
    .run(function($rootScope, $location) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
          if (!$rootScope.userName) {
            // no logged user, redirect to /index
            if (next.templateUrl !==  'index.tpl.html') {
                $location.path('/index');
            }
          }
        });
    });
})(angular);
