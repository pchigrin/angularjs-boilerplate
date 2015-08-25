(function() {
'use strict';

var projects = [{id: 1, name: 'project A', info: 'project A info'}, {id: 2, name: 'project B', info: 'project B info'}];

angular.module('projectControllers', [])
.controller('ProjectIndexController', function() {
    this.projects = projects;
    this.projectId;
    
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

})();
