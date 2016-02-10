'use strict'
var xyz = null;
var sarModule = angular.module('teacherActivityReports.teacherDetails', []);
sarModule.controller('teacherDetailsCtrl', ['$scope', '$rootScope', '$routeParams', 'getDataCourseTeacher', 'getEnrollmentStatus','getDataStudentTeacher', function ($scope, $rootScope, $routeParams, getDataCourseTeacher, getEnrollmentStatus,getDataStudentTeacher) {

    console.dir("**Inside teacherDetailsCtrl**");
    
    // console.log(getData._get($rootScope.role,$rootScope.userid));

    $scope.teacherId = $routeParams.teacherId;
    $scope.details = {};
    console.log("a");
    $rootScope.isblue = false;
    $scope.courseNotSelected = false;
    $scope.enrllNotSelected = false;
    $scope.srtDateNotSelected = false;
    $scope.endDateNotSelected = false;
    $scope.multiselectModel = [];
    $scope.courseIdArr = [];

    /*
    * @startDate: holds the start date.
    * Acceptable date formats: mm-dd-yyyy, mm-dd-yy, ISO formatated string, miliseconds
    */
    $scope.startDate = "04-02-2016";

    /*
    * @endDate: holds the start date.
    * Acceptable date formats: mm-dd-yyyy, mm-dd-yy, ISO formatated string, miliseconds
    */
    $scope.endDate = "04-02-2016";

    /*
    * @courseArr: Courses received from server
    * TODO:: modify object structure as per data received.
    */

    $scope.enrollmentArr = getEnrollmentStatus.get();
    console.log("2378459023478927842748923749273423894792384798237498347923784");

    getDataCourseTeacher._get($rootScope.role, $rootScope.userid,$rootScope.token)
        .then(function onsuccess(response) {
            console.log(response.data);  
            //  __$scopecourseArr = response.data.course;
            //  $scopVar.$apply();
            // return response.data;
            $scope.setData(response.data);

        });

    $scope.setData = function (teacherCourse) {
        console.log(teacherCourse);
        $scope.courseArr = teacherCourse.data.course;
        console.log($scope.courseArr);
    }

    console.log($rootScope.value);
              
              
    
    // xyz = $scope.teacherCourse;
    // console.log($scope.teacherCourse.value.data);
  
    //  console.log($scope.courseArr);
    // $scope.courseArr = [
    //     {
    //         id: 0,
    //         name: "Grade 2 Language Arts"
    //     },
    //     {
    //         id: 1,
    //         name: "Grade 5 Mathematics"
    //     },
    //     {
    //         id: 2,
    //         name: "Grade 10 Integrated Math"
    //     },
    //     {
    //         id: 3,
    //         name: "SINET: Biology A (Flex)"
    //     }
    // ];

    /*
    * @enrollmentArr: Enrollment array
    */

    $scope.submit = function () {

    };

    // Success callback
    var handleSuccess = function (data, status) {
        $scope.details = data;
        console.log(status, $scope.details.courses._get);
    };

    // Error callback
    var handleError = function (err, status) {
        $scope.details = {};
        console.log(status, err);
    };

    //getData._get($scope.teacherId).success(handleSuccess).error(handleError);

    $scope.$watch('selectedDate', function () {
        console.log($scope.selectedDate);
    }, true);

    $scope.$watch('multiselectModel', function () {

        console.log($scope.multiselectModel);
        $scope.courseIdArr = [];

        for (var i = 0; i < $scope.multiselectModel.length; i++) {
            $scope.courseIdArr.push($scope.multiselectModel[i].id);
            console.log($scope.courseIdArr);           
        }
        
         getDataStudentTeacher._get($rootScope.role, $scope.courseIdArr)
                .then(function onsuccess(response) {
                    console.log(response.data);  
                    //  __$scopecourseArr = response.data.course;
                    //  $scopVar.$apply();
                    // return response.data;
                    $scope.setData(response.data);

                });
        
        $scope.setData=function(studentCourse){
                  console.log(studentCourse);
                  $scope.courseArr=studentCourse.data.course;
  
                  console.log($scope.courseArr);
              }
    }, true);
    console.log("$scope.courseIdArr", $scope.courseIdArr);

}]);
