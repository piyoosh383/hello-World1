//var app = angular.module('myApp', []);
//app.controller('myCtrl', function ($scope, $http) {
ShareApp.controller("myCtrl", ["$scope", "$http", "$rootScope", "$uibModal", "$q", "$timeout", "SharewebListService", "SharewebCommonFactoryService", "GlobalConstants",
    function ($scope, $http, $rootScope, $uibModal, $q, $timeout, SharewebListService, SharewebCommonFactoryService, GlobalConstants) {
    $scope.GetData = function () {
        $http
            ({
                method: 'GET',
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getByTitle('TestGithubList')/items?$select=Title",
                header: {
                    "Accept": "application/json;odata=verbose",
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(function (getdata) {               
                $scope.myData = getdata.data.value;               
            },
                function (error) {
                    console.log(error);
                });
    }
    $scope.GetData();
 }]);
