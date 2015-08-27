angular.module('choobsApp.project.controllers', [
    'choobsApp.project.factories'
])
.controller('ProjectIndexController', function(ProjectFactory) {
    this.projects = ProjectFactory.getProjects();
    this.projectId = undefined;
    
    this.setProjectId = function(projectId) {
        this.projectId = projectId;
    };

    this.isSelected = function(projectId) {
        return this.projectId === projectId;
    };
    
    this.getSelected = function() {
        return this.projects[this.projectId - 1];
    };
});
