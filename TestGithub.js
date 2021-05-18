var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

    $scope.GetData = function () {
        $http
            ({
                method: 'GET',
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getByTitle('TestGithubList')/items?$select=Title",
       contentType: 'application/json',
  dataType:'jsonp',
  responseType:'application/json',
  xhrFields: {
    withCredentials: false
  },
  headers: {
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'application/json',
  },
            }).then(function (getdata) {               
                $scope.myData = getdata.data.value;               
            },
                function (error) {
                    console.log(error);
                });
    }
    $scope.GetData();
});
