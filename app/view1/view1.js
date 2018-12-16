'use strict';

angular.module('mediaApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider, $sce) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($scope, $sce, $timeout) {
        var videoElement = document.querySelector('#selfview');

        navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(function(stream){
            console.log(stream);
            console.log(videoElement);

            $timeout(function(){
                videoElement.srcObject = stream;
            }, 3000);

        }).catch(function(error) {
            console.error(error)
        })
    });