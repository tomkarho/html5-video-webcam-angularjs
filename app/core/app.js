'use strict';

// Declare app level module which depends on views, and core components
angular.module('mediaApp', [
    'ngRoute',
    'mediaApp.view1'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);