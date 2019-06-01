
(function () {
    'use strict';

    var app = angular.module('myapp', []);
    
    app.controller('workspacecontroller', function ($scope) {
        $scope.isMenu = false;
        $scope.nav = 'one';
        $scope.lastScrollTop = 0;
        $scope.direction = "";
        $scope.st = 0;

        $scope.showMenu = function () {
            $scope.isMenu = !$scope.isMenu;
        };
    });

})();	