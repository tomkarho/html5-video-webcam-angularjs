'use strict';

angular.module('mediaApp').directive('mediaSource', function () {
    return {
        restrict: 'A',
        replace: false,
        scope: {
            stream: '='
        },
        link: link
    };


    function link(scope, element, attrs) {
        scope.$watch('stream', function() {
            console.log('stream changed');


            if(scope.stream) {
                // There is a bug in jqlite which will convert all camel case to lowercase
                // and thus srcObject would become srcobject so we will have to access the element directly
                element[0].srcObject = scope.stream;
                element.css("border-color", "red");
            }
        });
    }
});