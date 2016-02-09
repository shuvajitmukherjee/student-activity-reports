var routingModule = angular.module("studentActivityReports.routing", []);


// routingModule.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/?token=sffdgf3543434&role=student&user_id=10156753', {
//         templateUrl: 'js/partials/home.html',
//         controller: 'MainCtrl'
//       }).
//       when('/student-activity-reports/:teacherId', {
//         templateUrl: '/js/partials/student-activity-reports.html',
//         controller: 'studentDetailsCtrl'
//       }).
//        when('/teacher-form/:teacherId', {
//         templateUrl: 'js/partials/teacher-form.html',
//         controller: 'studentDetailsCtrl'
//         }).
//         when('/admin-form/:teacherId', {
//         templateUrl: 'js/partials/admin-form.html',
//         controller: 'studentDetailsCtrl'
//         }).
//       otherwise({
//         redirectTo: '/?token=sffdgf3543434&role=student&user_id=10156753'
//       });
//   }]);

routingModule.provider('routeInfo', function() {
    return {
        _getRoutingInfo: function() {
            return [
                {
                    route: '/',
                    templateUrl: 'js/partials/home.html',
                    controller: 'MainCtrl',
                },
                {
                    route: '/student-activity-reports/:teacherId',
                    templateUrl: 'js/partials/student-activity-reports.html',
                    controller: 'studentDetailsCtrl'
                },
                {
                    route: '/teacher-form/:teacherId',
                    templateUrl: 'js/partials/teacher-form.html',
                    controller: 'studentDetailsCtrl'
                },
                {
                    route: '/admin-form/:teacherId',
                    templateUrl: 'js/partials/admin-form.html',
                    controller: 'studentDetailsCtrl'
                }
            ];
        },
        $get: function() {
            return {
                getRoutingInfo: this._getRoutingInfo
            };
        }
    };
});
