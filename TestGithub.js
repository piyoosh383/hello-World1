var app = angular.module('myApp', []);
app.controller('myCtroller', function ($scope, $http) {

    $scope.GetData = function () {
        $http
            ({
                method: 'GET',
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getByTitle('TestGithubList')/items?$select=Title",
                 method: "GET",
            async: false,
            headers: {
                "accept": "application/json;odata=verbose",
                "content-Type": "application/json;odata=verbose"
            }
            }).then(function (getdata) {
                console.log(myData);
                $scope.myData = getdata.data;
                // console.log($scope.groupBY); 
            },
                function (error) {
                    console.log(error);
                });
    }
    $scope.GetData();
});
