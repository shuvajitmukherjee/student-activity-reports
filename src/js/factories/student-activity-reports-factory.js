'use strict'
var factoryModule = angular.module('studentActivityReports.factories', []);

factoryModule.factory('getData', function($http) {

    var basePath = 'http://172.16.9.197:8282/gage-service/service/course?';

    return {
        _get: function(role,userid,__$scopecourseArr) {
            console.log("*******************************************");
            console.log(role,userid);
             return $http.get(basePath +"role="+role+"&userids="+userid)
             
        }
    };
});


factoryModule.factory('getEnrollmentStatus', function($http) {

    var service = {};

    service.get = function() {
        return [
            {
                id: 0,
                name: "Active"
            },
            {
                id: 1,
                name: "Withdrawn"
            },
            {
                id: 2,
                name: "WithdrawnFailed"
            },
            {
                id: 3,
                name: "Transferred"
            },
            {
                id: 4,
                name: "Completed"
            },
            {
                id: 5,
                name: "CompletedNoCredit"
            },
            {
                id: 6,
                name: "Suspended"
            },
            {
                id: 7,
                name: "Inactive"
            }
        ];
    };

    return service;
});
