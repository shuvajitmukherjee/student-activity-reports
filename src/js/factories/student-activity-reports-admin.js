'use strict'
var factoryModule = angular.module('studentActivityReportsAdmin.factories', []);

factoryModule.factory('getData', function($http) {

    var basePath = '/src/js/data/';

    return {
        _get: function(str) {
            return $http.get(basePath + str + '.json');
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
