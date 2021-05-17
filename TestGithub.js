var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $scope.GetData = function () {
        $http
            ({
                method: 'GET',
                url: "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/web/lists/getByTitle('TestGithubList')/items?$select=Title",
                header: {
                    "Accept": "application/json;odata=verbose"
                }
            }).then(function (getdata) {                
                $scope.myData = getdata.data;              
            },
                function (error) {
                    console.log(error);
                });
    }
    $scope.GetData();
});
