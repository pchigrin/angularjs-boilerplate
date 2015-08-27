angular.module('choobsApp.project.factories', [])
.factory('ProjectFactory', function() {
    var factory = {},
        projects = [{id: 1, name: 'project A', info: 'project A info'}, {id: 2, name: 'project B', info: 'project B info'}];
    
    factory.getProjects = function() {
        return projects;
    };
    
    return factory;
});
