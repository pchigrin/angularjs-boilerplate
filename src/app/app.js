angular.module('cbmApp', [
    'ngRoute',
    'homeControllers',
    'userControllers',
    'projectControllers',
    'templates-app',
    'templates-common'
])
.controller('MenuController', function($rootScope) {
    var controller = this;
    
    this.setTab = function(tab) {
        this.tab = tab;
    };
    
    this.isSelected = function(tab) {
        return this.tab === tab;
    };
    
    $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
        $rootScope.pageTitle = currentRoute.title;
        controller.setTab(currentRoute.title);
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
