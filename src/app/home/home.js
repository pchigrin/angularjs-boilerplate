angular.module('choobsApp.home', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        title: 'home',
        templateUrl: 'home/home.index.tpl.html',
        controller: 'HomeIndexController'
    });
})
.controller('HomeIndexController', function($scope, notificationsFactory) {
    $scope.sendNotification = function(){
        notificationsFactory.pushForCurrentRoute('Error notification');
    };
    $scope.tooltipName = 'tooltip';
    $scope.tooltipText = 'Hello, World!';
});
