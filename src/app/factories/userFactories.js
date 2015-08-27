angular.module('choobsApp.user.factories', [])
.factory('UserFactory', function() {
    var factory = {},
        users = [{id: 1, name: 'user A', info: 'user A info'}, {id: 2, name: 'user B', info: 'user B info'}];
    
    factory.getUsers = function() {
        return users;
    };
    
    return factory;
});
