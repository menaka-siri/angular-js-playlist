var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.config(function(){

});


myNinjaApp.run(function(){

});

myNinjaApp.controller('NinjaController', ['$scope',function($scope){
    $scope.message = "hey y'all";

    $scope.ninjas = [
        {
            name: "yoshi",
            belt: "green",
            rate: 50
        },
        {
            name: "Crystal",
            belt: "red",
            rate: 30
        },
        {
            name: "Ryu",
            belt: "black",
            rate: 20
        },
        {
            name: "Shaun",
            belt: "brown",
            rate: 45
        }
    ];
}]);