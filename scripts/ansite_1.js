
(function () {
    'use strict';

    var app = angular.module('myapp', []);

    app.directive("scroll", function ($window) {
        return function ($scope, $element, $attrs) {
            angular.element($window).bind("scroll", function () {
                $scope.st = $window.pageYOffset;
                if ($scope.st > $scope.lastScrollTop) {
                    $scope.direction = "down";
                    $scope.nav = 'three';
                    if ($scope.isMenu === true) {
                        $scope.nav = 'one';
                    } else {
                        $scope.nav = 'three';
                    }
                } else if ($scope.st < 10) {
                    $scope.direction = "up";
                    if ($scope.isMenu === true) {
                        $scope.nav = 'one';
                    } else {
                        $scope.nav = 'one';
                    }
                } else if ($scope.st < $scope.lastScrollTop) {
                    $scope.direction = "up";
                    if ($scope.isMenu === true) {
                        $scope.nav = 'one';
                    } else {
                        $scope.nav = 'two';
                    }
                }

                $scope.lastScrollTop = $scope.st;
                $scope.$apply();
            });
        };
    });

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