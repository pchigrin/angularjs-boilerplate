angular.module('choobsApp', [
    'templates-app',
    'templates-common',
    'ui.bootstrap',
    'choobsApp.home',
    'choobsApp.user',
    'choobsApp.project',
    'services.breadcrumbs',
    'notifications',
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
.controller('TitleController', function($scope) {
    $scope.$on('$routeChangeSuccess', function(event, current, previous) {
        $scope.title = current.title;
    });
})
.controller('BreadcrumbController', function($scope, breadcrumbs) {
    $scope.dummy = 'test';
    $scope.breadcrumbs = breadcrumbs;
})
.controller('TabController', function($scope, TabFactory, notificationsFactory) {
    $scope.getTabs = function() {
        return TabFactory.getTabs();
    };
    
    $scope.$on('$routeChangeSuccess', function(event, current, previous) {
        $scope.activeTab = {}; //reset
        $scope.activeTab[current.title] = true;
        notificationsFactory.pushForCurrentRoute('Current route: '+ current.title, 'success');
        notificationsFactory.pushForNextRoute('Previous route: '+ current.title, 'success');
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
