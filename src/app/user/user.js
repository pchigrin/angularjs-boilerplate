angular.module('choobsApp.user', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider
    .when('/user', {
        title: 'user',
        templateUrl: 'user/user.index.tpl.html',
        controller: 'UserIndexController'
    })
    .when('/user/:id', {
        title: 'user',
        templateUrl: 'user/user.show.tpl.html',
        controller: 'UserShowController'
    });
})
.factory('UserFactory', function() {
    var factory = {},
        users = [{id: 1, name: 'user A', info: 'user A info'}, {id: 2, name: 'user B', info: 'user B info'}];
    
    factory.getUsers = function() {
        return users;
    };
    
    return factory;
})
.controller('UserIndexController', function ($scope, UserFactory) {
    $scope.users = UserFactory.getUsers();
})
.controller('UserShowController', function ($scope, $routeParams, UserFactory) {
    $scope.id = $routeParams.id;
    $scope.info = UserFactory.getUsers()[$routeParams.id - 1].info;
});
