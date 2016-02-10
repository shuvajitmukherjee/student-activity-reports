'use strict'
var admModule = angular.module('studentActivityReports.adminDetails', []);
admModule.controller('adminctrl', ['$scope', '$rootScope','$routeParams', 'getSchoolData', 'getEnrollmentStatus', function($scope, $rootScope, $routeParams, getSchoolData, getEnrollmentStatus) {

    console.dir("**Inside Admin Ctrl**");
    
    // console.log(getData._get($rootScope.role,$rootScope.userid));

    $scope.userId = $routeParams.userid;
    $scope.details = {};
    $rootScope.isblue = false;
    $scope.courseNotSelected=false;
    $scope.enrllNotSelected=false;
    $scope.srtDateNotSelected=false;
    $scope.endDateNotSelected=false;
    $scope.schoolListIds =[];
    $scope.multiselectModelAdminSchool =[];
    $scope.allSchoolId =[];
console.log("$scope.userId  ",$scope.userId );
console.log("$routeParams.userId  ",$rootScope.admindetail);
///console.log("$scope.userId  ",$scope.userId );
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

    $scope.getAllSchollDomainId = function(){
        
//        for(var i=0; i<$scope.schoolList.length;i++)
    }
    /*
    * @courseArr: Courses received from server
    * TODO:: modify object structure as per data received.
    */
    
    $scope.enrollmentArr = getEnrollmentStatus.get();
    console.log("2378459023478927842748923749273423894792384798237498347923784___________"+$rootScope.admindetail.data.user.domainid);
    
     getSchoolData._get($rootScope.admindetail.data.user.domainid,$rootScope.token)
    .then(function onsuccess(response){
                console.log(response.data);  
                $scope.setData(response.data); 
             });
             
              $scope.setData=function(studentCourse){
                  console.log(studentCourse);
                  $scope.schoolList=studentCourse.data.domains;
  
                  console.log($scope.schoolList);
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
    
    
    
     $scope.$watch('selectedDate', function () {
        console.log($scope.selectedDate);
    }, true);
    
    $scope.$watch('multiselectModelAdminCourse', function () {
        $scope.schoolListIds = [];
     
        for(var i=0;i<$scope.multiselectModelAdminCourse.length;i++) {
            $scope.schoolListIds.push($scope.multiselectModelAdminCourse[i].id);
            console.log($scope.schoolListIds);
        }
    }, true);
    
}]);
