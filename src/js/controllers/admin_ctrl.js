'use strict'
var admModule = angular.module('studentActivityReports.adminDetails', []);
admModule.controller('adminctrl', ['$scope', '$rootScope','$routeParams', 'getSchoolData', 
'getSchoolStudent','getEnrollmentStatus','getSchoolStudentCourse', function($scope, $rootScope, $routeParams,
 getSchoolData,getSchoolStudent, getEnrollmentStatus,getSchoolStudentCourse) {

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
//    $scope.allSchoolId =[];
    $scope.allSchoolIdArrays = [];
    
    
    $scope.studentListIds =[];
    $scope.multiselectModelAdminStudent = [];
    $scope.allSchoolStudentIdArrays=[]; 
    
     $scope.studentCourseListIds = [];
     $scope.multiselectModelAdminStudentCourse = [];
console.log("$scope.userId  ",$scope.userId );
console.log("$routeParams.userId  ",$rootScope.admindetail);
///console.log("$scope.userId  ",$scope.userId );
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
    $scope.endDate = "14-02-2016";

    $scope.getAllSchollDomainId = function(dataresopnse){
        $scope.allSchoolIdArrays =[];
        console.log(dataresopnse);
        for(var i=0; i<dataresopnse.data.domains.length;i++){
            $scope.allSchoolIdArrays.push(dataresopnse.data.domains[i].id)
        }
        console.log("All Id Array ",$scope.allSchoolIdArrays);
    }
    
     $scope.getAllSchollStudentCourseId = function(dataresopnse){
        $scope.allSchoolStudentIdArrays =[];
        console.log(dataresopnse);
        for(var i=0; i<dataresopnse.length;i++){
            $scope.allSchoolStudentIdArrays.push(dataresopnse[i].id)
        }
        console.log("All Id Array ",$scope.allSchoolStudentIdArrays);
    }
    /*
    * @courseArr: Courses received from server
    * TODO:: modify object structure as per data received.
    */
    
    $scope.enrollmentArr = getEnrollmentStatus.get();
    // console.log("2378459023478927842748923749273423894792384798237498347923784___________"+$rootScope.admindetail.data.user.domainid);
    
    //  getSchoolData._get($rootScope.admindetail.data.user.domainid,$rootScope.token)
    // .then(function onsuccess(response){
    //             console.log(response.data);  
    //             $scope.setData(response.data); 
    //             $scope.getAllSchollDomainId(response.data);
    //             getSchoolStudent._get($scope.allSchoolIdArrays)
    //             .then(function onSuccess(res){
    //                 console.log("response of _getschool Data  ",res);
                    
    //                $scope.setDataoFStuds(res.data.data.user);
    //                 $scope.getAllSchollStudentCourseId(res.data.data.user);
                    
    //                 getSchoolStudentCourse._get($scope.allSchoolStudentIdArrays)
    //                 .then(function onSuccess(res){
    //                     console.log("response of allSchoolStudentIdArrays Data  ",res);
    //                     $scope.setDataoFSchoolStudsCourse(res.data.data.course);
    //                 },function onError(res){
    //                     console.log("response of allSchoolStudentIdArrays Data Error  ",res);
    //                 });  
    //             },function onError(res){
    //                 console.log("response of _getschool Data Error  ",res);
    //             });  
    //         },function onerror(response){
    //             console.log("Error has been occured");
    //             console.log(response.data);
    //     });
             
    $scope.setData=function(studentCourse){
        console.log(studentCourse);
        $scope.schoolList=studentCourse.data.domains;
        console.log($scope.schoolList);
    } 
    
     $scope.setDataoFStuds=function(schoolsStudent){
        console.log(schoolsStudent);
        $scope.schoolStudentList=schoolsStudent;
        console.log($scope.schoolStudentList);
    } 
     
     $scope.setDataoFSchoolStudsCourse=function(schoolsStudent){
        console.log(schoolsStudent);
        $scope.schoolStudentCourseList=schoolsStudent;
        console.log($scope.schoolStudentCourseList);
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
    
    
     $scope.$watch('multiselectModelAdminStudent', function () {
        $scope.studentListIds = [];
     
        for(var i=0;i<$scope.multiselectModelAdminStudent.length;i++) {
            $scope.studentListIds.push($scope.multiselectModelAdminStudent[i].id);
            console.log($scope.studentListIds);
        }
    }, true);
    
    
     $scope.$watch('multiselectModelAdminStudentCourse', function () {
        $scope.studentCourseListIds = [];
     
        for(var i=0;i<$scope.multiselectModelAdminStudentCourse.length;i++) {
            $scope.studentCourseListIds.push($scope.multiselectModelAdminStudentCourse[i].id);
            console.log($scope.studentCourseListIds);
        }
    }, true);
    
}]);
