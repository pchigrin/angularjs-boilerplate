angular.module('services.breadcrumbs', [])
.factory('breadcrumbs', function($rootScope, $location) {
    var breadcrumbs = [],
        breadcrumbsService = {};

    $rootScope.$on('$routeChangeSuccess', function(event, current) {
        var pathElements = $location.path().split('/'),
            breadcrumbPath = function(index) {
                return '#/' + (pathElements.slice(0, index + 1)).join('/');
            },
            result = [];

        pathElements.shift();
        for (var i = 0; i < pathElements.length; i++) {
            result.push({name: pathElements[i], path: breadcrumbPath(i)});
        }

        breadcrumbs = result;
    });

    breadcrumbsService.getAll = function() {
        return breadcrumbs;
    };

    breadcrumbsService.getFirst = function() {
        return breadcrumbs[0] || {};
    };

    return breadcrumbsService;
});
