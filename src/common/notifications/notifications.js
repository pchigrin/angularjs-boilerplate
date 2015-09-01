angular.module('notifications', [])
.factory('notificationsFactory', function($rootScope) {
    var notifications = {
            STICKY: [],
            ROUTE_CURRENT: [],
            ROUTE_NEXT: []
        },
        notificationsFactory = {};

    var prepareNotification = function (msg, type, properties) {
        return angular.extend({
            message: msg,
            type: type || 'danger'
        }, properties || {});
    };
    var addNotification = function(notificationsArray, notificationObj) {
        if (!angular.isObject(notificationObj)) {
            throw new Error("Only object can be added to the notification service");
        }
        notificationsArray.push(notificationObj);
        return notificationObj;
    };

    $rootScope.$on('$routeChangeSuccess', function () {
        notifications.ROUTE_CURRENT.length = 0;
        notifications.ROUTE_CURRENT = angular.copy(notifications.ROUTE_NEXT);
        notifications.ROUTE_NEXT.length = 0;
    });

    notificationsFactory.getCurrent = function() {
        return [].concat(notifications.STICKY, notifications.ROUTE_CURRENT);
    };

    notificationsFactory.pushSticky = function(msg, type, properties) {
        return addNotification(notifications.STICKY, prepareNotification(msg, type, properties));
    };

    notificationsFactory.pushForCurrentRoute = function(msg, type, properties) {
        return addNotification(notifications.ROUTE_CURRENT, prepareNotification(msg, type, properties));
    };

    notificationsFactory.pushForNextRoute = function(msg, type, properties) {
        return addNotification(notifications.ROUTE_NEXT, prepareNotification(msg, type, properties));
    };

    notificationsFactory.remove = function(notification) {
        angular.forEach(notifications, function(notificationsByType) {
            var idx = notificationsByType.indexOf(notification);

            if (idx > -1) {
                notificationsByType.splice(idx, 1);
            }
        });
    };

    notificationsFactory.removeAll = function () {
        angular.forEach(notifications, function(notificationsByType) {
            notificationsByType.length = 0;
        });
    };

    return notificationsFactory;
})
.controller('NotificationsController', function ($scope, notificationsFactory) {
    $scope.notifications = notificationsFactory;

    $scope.removeNotification = function (notification) {
        notificationsFactory.remove(notification);
    };
});
