angular.module('choobsApp.user.controllers', [
    'choobsApp.user.factories'
])
.controller('UserIndexController', function (UserFactory) {
    this.users = UserFactory.getUsers();
})
.controller('UserShowController', function ($routeParams, UserFactory) {
    this.id = $routeParams.id;
    this.info = UserFactory.getUsers()[this.id - 1].info;
});
