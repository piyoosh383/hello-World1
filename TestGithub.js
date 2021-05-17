var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

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
               // console.log(myData);
                $scope.myData = getdata.data.value;
                // console.log($scope.groupBY); 
            },
                function (error) {
                    console.log(error);
                });
    }
    $scope.GetData();
});
