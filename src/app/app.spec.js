describe('BreadcrumbController', function() {
    beforeEach(module('choobsApp'));

    it('dummy test', inject(function ($controller) {
        var scope = {},
            controller = $controller('BreadcrumbController', {$scope:scope});
            
        expect(scope.dummy).toBe('test');
    }));
});