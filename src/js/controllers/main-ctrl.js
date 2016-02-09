'use strict'
var constantModule = angular.module('constant', []);

constantModule.constant('$theme', {
    "theme": "black"
});

var homeModule = angular.module('studentActivityReports.home', ['constant']);


homeModule.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$theme', '$routeParams', 'validateUrlData', function ($scope, $rootScope, $location, theme, $routeParams, validateUrlData) {

    $scope.progressReport = false;
    $scope.courseCompletionReport = false;
    $scope.studentActivityReport = false;


    $rootScope.userid = $routeParams.userid;
    $rootScope.role = $routeParams.role;
    console.log($rootScope.role, $rootScope.userid);
    console.log("*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

    validateUrlData._get($routeParams.role, $routeParams.userid)
        .then(function onsuccess(response) {
            console.log(response.data);

            $scope.showTiles(response.data);

        }, function onError(errResponse) {
            console.log("err Response ", errResponse);
            $scope.blockUser(errResponse)
        });

    $scope.showTiles = function (authResponse) {
        console.log(authResponse);
        // $scope.courseArr=studentCourse.data.course;
        console.log(authResponse);

        if ($scope.role === 'student') {
            $scope.progressReport = true;
            $scope.studentActivityReport = true;
        }
        else if ($scope.role === 'teacher') {
            $scope.courseCompletionReport = true;
            $scope.studentActivityReport = true;

        }
        else if ($scope.role === 'admin') {
            $scope.progressReport = true;
            $scope.courseCompletionReport = true;
            $scope.studentActivityReport = true;

        }
    }
    $scope.blockUser = function (authResponse) {
        console.log(authResponse);
        // $scope.courseArr=studentCourse.data.course;
        console.log(authResponse);
    }


    console.log('$routeParams', $routeParams);
    console.log('role= ', $routeParams.role);
    console.dir("Inside MainCtrl");
    console.log(theme.theme);
    $rootScope.isblue = true;

    $scope.teacherId = "12345";
    $scope.extDataArr = ["checkAll", "uncheckAll"];
    $scope.extData = $scope.extDataArr.join(",");

    $scope.roles = {
        "student": [{ "text": "Progress Report" }, { "text": "Student Activity Report" }],
        "teacher": [{ "text": "Course Completion Report" }, { "text": "Student Activity Report" }],
        "admin": [{ "text": "Progress Report" }, { "text": "Course Completion Report" }, { "text": "Student Activity Report" }]
    };

    console.log($scope.roles);

    $scope.openForm2 = function () {
        $location.path("/student-activity-reports");
    };
    $scope.openForm1 = function () {
        $location.path("/teacher-form");
    };
    $scope.openForm = function () {
        $location.path("/admin-form");
    };

    $scope.go = function (path) {
        $location.path(path);
    };
}]);
