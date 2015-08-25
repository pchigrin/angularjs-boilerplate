(function () {
'use strict';

var users = [{id: 1, name: 'user A', info: 'user A info'}, {id: 2, name: 'user B', info: 'user B info'}];

angular.module('userControllers', [])
.controller('UserIndexController', function () {
    this.users = users;
})
.controller('UserShowController', function ($routeParams) {
    this.id = $routeParams.id;
    this.info = users[this.id - 1].info;
});

})();
