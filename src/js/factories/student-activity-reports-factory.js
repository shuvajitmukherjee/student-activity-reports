'use strict'
var factoryModule = angular.module('studentActivityReports.factories', []);

factoryModule.factory('validateUrlData', function($http, $rootScope) {


    var basePath = "http://172.16.9.197:8282/gage-service/service/user/rights/"
    //45685775?roletype=teacher&entitytype=D|C&token=~SKq1BAAAAAALtEkMQ0pw5A.4h2waVknunsG6_6pOweqSB"
    return {
        _get: function(role,userid,_token) {
            console.log("*******************************************");
            console.log(role,userid);
            var token = _token;
            var entitytype = 'D|C';
            $rootScope.showoverlay = true;
            var __url = basePath +userid+'?roletype='+role+'&entitytype='+entitytype+'&token='+token;
            console.log(__url);
            return $http.get(__url);
             
        }
    };
});

factoryModule.factory('getData', function($http) {

    var basePath = 'http://172.16.9.197:8282/gage-service/service/course?';

    return {
        _get: function(role,userid,__$scopecourseArr) {
            console.log("*******************************************");
            console.log(role,userid);
             return $http.get(basePath +"role="+role+"&userids="+userid);        
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
