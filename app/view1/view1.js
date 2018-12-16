'use strict';

angular.module('mediaApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider, $sce) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($scope, $sce, $timeout) {
        $scope.test = "test 1";
        navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(function(stream){
            $timeout(function(){
                $scope.stream = stream;
                $scope.test = "test 2";
            }, 3000);

        }).catch(function(error) {
            console.error(error)
        })
    });