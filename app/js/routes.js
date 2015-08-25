(function () {
'use strict';

angular.module('cbmApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })

    .when('/home', {
        title: 'home',
        templateUrl: 'app/templates/home/index.html',
        controller: 'HomeIndexController'
    })

    .when('/user', {
        title: 'user',
        templateUrl: 'app/templates/user/index.html',
        controller: 'UserIndexController',
        controllerAs: 'indexCtrl'
    })

    .when('/user/:id', {
        title: 'user',
        templateUrl: 'app/templates/user/show.html',
        controller: 'UserShowController',
        controllerAs: 'showCtrl'
    })

    .when('/project', {
        title: 'project',
        templateUrl: 'app/templates/project/index.html',
        controller: 'ProjectIndexController',
        controllerAs: 'indexCtrl'
    })

    .otherwise({redirectTo: '/'});
}]);

})();
