'use strict'
var constantModule = angular.module('constant', []);

constantModule.constant('$theme', {
    "theme": "black"
});

var homeModule = angular.module('studentActivityReports.home', ['constant']);


homeModule.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$theme', '$routeParams', function ($scope, $rootScope, $location, theme, $routeParams) {

    $scope.progressReport=true;
    $scope.courseCompletionReport=true;
    $scope.studentActivityReport=true;
    
    
    $rootScope.userid = $routeParams.userid;
    $rootScope.role = $routeParams.role;
    console.log($rootScope.role,$rootScope.userid);
    console.log("*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    
    if($scope.role==='student'){
        $scope.courseCompletionReport=false;
    }
    else if($scope.role==='teacher'){
        $scope.progressReport=false;
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
