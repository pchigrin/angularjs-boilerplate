angular.module('choobsApp.routes', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })

    .when('/home', {
        title: 'home',
        templateUrl: 'templates/home/index.tpl.html',
        controller: 'HomeIndexController'
    })

    .when('/user', {
        title: 'user',
        templateUrl: 'templates/user/index.tpl.html',
        controller: 'UserIndexController',
        controllerAs: 'indexCtrl'
    })

    .when('/user/:id', {
        title: 'user',
        templateUrl: 'templates/user/show.tpl.html',
        controller: 'UserShowController',
        controllerAs: 'showCtrl'
    })

    .when('/project', {
        title: 'project',
        templateUrl: 'templates/project/index.tpl.html',
        controller: 'ProjectIndexController',
        controllerAs: 'indexCtrl'
    })

    .otherwise({redirectTo: '/'});
});
