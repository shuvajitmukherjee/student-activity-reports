'use strict'
var xyz=null;
var sarModule = angular.module('studentActivityReports.studentDetails', []);
sarModule.controller('studentDetailsCtrl', ['$scope', '$rootScope','$routeParams', 'getDataStudent', 
'getEnrollmentStatus','getStudentCourseData',
 function($scope, $rootScope, $routeParams, getDataStudent, getEnrollmentStatus,getStudentCourseData) {

    console.dir("**Inside studentDetailsCtrl**");
    
    // console.log(getData._get($rootScope.role,$rootScope.userid));

    $scope.teacherId = $routeParams.userId;
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
    var currDate = new Date();
    //var Date = new Date();
    $scope.startDateStartActivity =currDate.setDate(currDate.getDate()-7);
    $scope.maxDateStartActivity=new Date().setDate(new Date().getDate()-1);
   // console.log( $scope.maxDate);
    $scope.startDateEndActivity= new Date();

    /*
    * @endDate: holds the start date.
    * Acceptable date formats: mm-dd-yyyy, mm-dd-yy, ISO formatated string, miliseconds
    */
   // $scope.endDate = "04-02-2016";

    /*
    * @courseArr: Courses received from server
    * TODO:: modify object structure as per data received.
    */
    
    $scope.enrollmentArr = getEnrollmentStatus.get();
    console.log("2378459023478927842748923749273423894792384798237498347923784");
    
     getDataStudent._get($rootScope.role,$rootScope.userid)
    .then(function onsuccess(response){
                console.log(response.data);  
                             
                console.log("*********************************************")
                $scope.setData(response.data); 
                
                getStudentCourseData._get($rootScope.userid)
                .then(function onsuccess(response){
                    console.log(response.data);  
                             
                    console.log("*********************************************", response.data)
                    //$scope.setData(response.data); 
                });
                 
             },function onerr(res){
                 console.log("Form Errrrrrrrrrrrrrr");
             });
             
              $scope.setData=function(studentCourse){
                  console.log(studentCourse);
                  $scope.courseArr=studentCourse.data.course;
  
                  console.log($scope.courseArr);
              } 
    

    
    $scope.submitStudentInfo=function(){
        
       console.log(new Date($scope.startDateStartActivity));
        var startDateActivity = new Date($scope.startDateStartActivity);
        var endDateActivity = new Date($scope.startDateEndActivity);
        if (startDateActivity > endDateActivity) {
            alert("Activity end date must be greater then activity start date")
        }
        else{
            alert("Valid Date");
        }
        
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
