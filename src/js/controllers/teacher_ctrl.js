'use strict'
var xyz = null;
var sarModule = angular.module('teacherActivityReports.teacherDetails', []);
sarModule.controller('teacherDetailsCtrl', ['$scope', '$rootScope', '$routeParams', 'getDataCourseTeacher', 
'getEnrollmentStatus', 'getDataStudentTeacher', 
function ($scope, $rootScope, $routeParams, getDataCourseTeacher, getEnrollmentStatus, getDataStudentTeacher) {

    console.dir("**Inside teacherDetailsCtrl**");
    
    // console.log(getData._get($rootScope.role,$rootScope.userid));

    $scope.teacherId = $routeParams.teacherId;
    $scope.details = {};
    console.log("a");
    $rootScope.isblue = false;
//    $scope.courseNotSelected = false;
//    $scope.enrllNotSelected = false;
//    $scope.srtDateNotSelected = false;
//    $scope.endDateNotSelected = false;
    
    $scope.statusNotSelected = false;
    $scope.courseNotSelected = false;
    $scope.studentNotSelected = false;
    $scope.endDateNotgreater = false;
    
    $scope.multiselectModel = [];
    $scope.courseIdArr = [];

    $scope.courseStudentIdArr = [];
    $scope.multiselectModel2 = [];

    /*
    * @startDate: holds the start date.
    * Acceptable date formats: mm-dd-yyyy, mm-dd-yy, ISO formatated string, miliseconds
    */
    var currDate = new Date();
    //var Date = new Date();
    $scope.startDateStartActivity =currDate.setDate(currDate.getDate()-7);
    $scope.maxDateStartActivity=new Date().setDate(new Date().getDate()-1);
    $scope.startDateEndActivity= new Date();
    
    /* @courseArr: Courses received from server
    * TODO:: modify object structure as per data received.
    */

    $scope.enrollmentArr = getEnrollmentStatus.get();
    console.log("2378459023478927842748923749273423894792384798237498347923784");

    getDataCourseTeacher._get($rootScope.role, $rootScope.userid, $rootScope.token)
        .then(function onsuccess(response) {
            console.log(response.data);  
            //  __$scopecourseArr = response.data.course;
            //  $scopVar.$apply();
            // return response.data;
            $scope.setData(response.data);
        });

    $scope.setData = function (teacherCourse) {
        // debugger;
        console.log(teacherCourse.data.course);
        $scope.courseArr = teacherCourse.data.course;
        console.log($scope.courseArr);
        // $scope.courseIdArr = [];
        for (var i = 0; i < $scope.courseArr.length; i++) {
            $scope.courseIdArr.push($scope.courseArr[i].id);
            console.log($scope.courseIdArr);
        }

        getDataStudentTeacher._get($rootScope.role, $scope.courseIdArr)
            .then(function onsuccess(response) {
                console.log(response.data);  
                //  __$scopecourseArr = response.data.course;
                //  $scopVar.$apply();
                // return response.data;
                $scope.setStudentData(response.data);
            });

        $scope.setStudentData = function (studentCourse) {
            console.log(studentCourse);
            $scope.studentArr = studentCourse.data.user;

            console.log($scope.studentArr);
        }
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

    $scope.submit=function(){
       console.log(new Date($scope.startDateStartActivity));
        var startDateActivity = new Date($scope.startDateStartActivity);
        var endDateActivity = new Date($scope.startDateEndActivity);
        if (startDateActivity > endDateActivity) {
            $scope.endDateNotgreater = true
        }
        else{
            $scope.endDateNotgreater = false;
        }
    
        
      
  //TODO for Status select option  $scope.statusNotSelected = true;
  
       if( $scope.courseIdArr.length === 0){
           $scope.courseNotSelected = true;
        }else{
             $scope.courseNotSelected = false;
        }
        if( $scope.courseStudentIdArr.length === 0){
           $scope.studentNotSelected = true;
        }else{
             $scope.studentNotSelected = false;
        }
        
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


    }, true);


    $scope.$watch('multiselectModel2', function () {

        console.log($scope.multiselectModel2);

        $scope.courseStudentIdArr = [];
        for (var i = 0; i < $scope.multiselectModel2.length; i++) {
            $scope.courseStudentIdArr.push($scope.multiselectModel2[i].id);
            console.log($scope.courseStudentIdArr);
        }

        // getDataStudentTeacher._get($rootScope.role, $scope.courseStudentIdArr)
        //     .then(function onsuccess(response) {
        //         console.log(response.data);  
        //         //  __$scopecourseArr = response.data.course;
        //         //  $scopVar.$apply();
        //         // return response.data;
        //         $scope.setData1(response.data);

        //     });

        // $scope.setData1 = function (studentCourse) {
        //     console.log(studentCourse);
        //     $scope.studentArr = studentCourse.data.title;
        //     console.log($scope.studentArr);
        // }

    }, true);
    //  console.log("$scope.courseIdArr", $scope.courseIdArr);

}]);
