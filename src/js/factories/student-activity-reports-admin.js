'use strict'
var factoryModule = angular.module('studentActivityReportsAdmin.factories', []);



factoryModule.factory('getSchoolData', function($http) {

http://172.16.9.197:8282/gage-service/service/domain/list/45685236?token=~SKq1BAAAAAALtEkMQ0pw5A.4h2waVknunsG6_6pOweqSB
    var basePath = "http://172.16.9.197:8282/gage-service/service/domain/list/"
    
    return {
        _get: function(userid,__token) {
            console.log("*******************************************");
            console.log(userid);
            var token = "SKq1BAAAAAALtEkMQ0pw5A.4h2waVknunsG6_6pOweqSB";
            var __url = basePath +userid+'?token='+__token;
            console.log(__url);
            return $http.get(__url);
             
        }
    };
});



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
