angular.module('choobsApp', [
    'templates-app',
    'templates-common',
    'ui.bootstrap',
    'choobsApp.home',
    'choobsApp.user',
    'choobsApp.project',
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })
    .otherwise({redirectTo: '/'});
})
.factory('TabFactory', function() {
    var factory = {},
        tabs = [{
            title: 'Home', icon: 'home', href: 'home'
        }, {
            title: 'Users', icon: 'user', href: 'user'
        }, {
            title: 'Projects', icon: 'book', href: 'project'
        }];
    
    factory.getTabs = function() {
        return tabs;
    };
    
    return factory;
})
.controller('TabController', function($scope, $rootScope, TabFactory) {
    $scope.getTabs = function() {
        return TabFactory.getTabs();
    };
    
    $rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute) {
        $rootScope.pageTitle = currentRoute.title;
        $scope.activeTab = {}; //reset
        $scope.activeTab[currentRoute.title] = true;
    });
})
.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if (attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e) {
                    e.preventDefault();
                });
            }
        }
   };
});
