'use strict'

var app = angular.module('studentActivityReports', [
    'ngRoute',
    // 'ngAnimate',
    'ngSanitize',
    'ngResource',
    'ui.multiselect',
    // 'angularjs-dropdown-multiselect',
    'mgcrea.ngStrap.datepicker',
    'studentActivityReports.routing',
    'studentActivityReports.factories',
    'studentActivityReports.home',
    'studentActivityReports.studentDetails',
   
]);

app.config([
    '$routeProvider',
    'routeInfoProvider',
    function (
        $routeProvider,
        routeInfoProvider) {
        var routingInfo = routeInfoProvider._getRoutingInfo();

        for (var i = 0; i < routingInfo.length; i++) {
            $routeProvider.when(routingInfo[i].route, {
                controller: routingInfo[i].controller,
                templateUrl: routingInfo[i].templateUrl,
                index: i
            });
        }

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
]);
