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
    'studentActivityReportsTeacher.factories',
    'studentActivityReports.home',
    'studentActivityReports.studentDetails',
    'teacherActivityReports.teacherDetails',
    'studentActivityReports.adminDetails',
    'studentActivityReportsAdmin.factories'
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
