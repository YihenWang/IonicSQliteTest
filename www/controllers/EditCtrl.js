angular.module('starter.EditCtrl', [])
    .controller('editCtrl', function ($scope, Note, $stateParams, $location, $window) {
        Note.get($stateParams.id).then(function (result) {
            $scope.note = result;
        }, function (error) {
            console.warn(error);
        });
        $scope.go = function (path) {
            $location.path(path);
        };
    });