angular.module('choobsApp.project', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider
    .when('/project', {
        title: 'project',
        templateUrl: 'project/project.index.tpl.html',
        controller: 'ProjectIndexController'
    });
})
.factory('ProjectFactory', function() {
    var factory = {},
        projects = [{id: 1, name: 'project A', info: 'project A info'}, {id: 2, name: 'project B', info: 'project B info'}];
    
    factory.getProjects = function() {
        return projects;
    };
    
    return factory;
})
.controller('ProjectIndexController', function($scope, ProjectFactory) {
    var projectSelectedId;

    $scope.projects = ProjectFactory.getProjects();
    
    $scope.setProjectId = function(projectId) {
        projectSelectedId = projectId;
    };

    $scope.isSelected = function(projectId) {
        return projectSelectedId === projectId;
    };
    
    $scope.getSelected = function() {
        return $scope.projects[projectSelectedId - 1];
    };
});
