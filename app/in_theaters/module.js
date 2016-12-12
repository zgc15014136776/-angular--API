(function (angular) {

    //首页模块
    angular.module('moviecat.in_theaters', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/in_theaters', {
                templateUrl: './in_theaters/view.html',
                controller:'IntheatersController'
            });
        }])
        .controller('IntheatersController',['$scope','$http', function ($scope,$http) {
            //使用本地json文件模拟数据获取
                //angular中通过服务 $http 来发送ajax请求
            $http({
                method:'GET',
                url:'./in_theaters/data.json'
            }).then(function (response) {
                //请求成功的回调函数
                console.log(response);
                $scope.movie=response.data;
            }, function (response) {
                //请求失败的回调函数

            })
        }])

})(angular);