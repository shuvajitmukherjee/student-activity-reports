'use strict'
var xyz=null;
var sarModule = angular.module('studentActivityReports.studentDetails', []);
sarModule.controller('studentDetailsCtrl', ['$scope', '$rootScope','$routeParams', 'getData', 'getEnrollmentStatus', function($scope, $rootScope, $routeParams, getData, getEnrollmentStatus) {

    console.dir("**Inside studentDetailsCtrl**");
    
    // console.log(getData._get($rootScope.role,$rootScope.userid));

    $scope.teacherId = $routeParams.teacherId;
    $scope.details = {};
    console.log("a");
    $rootScope.isblue = false;
    $scope.courseNotSelected=false;
    $scope.enrllNotSelected=false;
    $scope.srtDateNotSelected=false;
    $scope.endDateNotSelected=false;

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
    
     getData._get($rootScope.role,$rootScope.userid)
    .then(function onsuccess(response){
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
    
    // xyz = $scope.studentCourse;
   // console.log($scope.studentCourse.value.data);
  
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
        
    };

    // Success callback
    var handleSuccess = function(data, status) {
        $scope.details = data;
        console.log(status, $scope.details.courses._get);
    };

    // Error callback
    var handleError = function(err, status) {
        $scope.details = {};
        console.log(status, err);
    };

    //getData._get($scope.teacherId).success(handleSuccess).error(handleError);

    $scope.$watch('selectedDate', function() {
        console.log($scope.selectedDate);
    }, true);
    
}]);
