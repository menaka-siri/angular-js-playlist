var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.config(function(){

});


myNinjaApp.run(function(){

});

myNinjaApp.controller('NinjaController', ['$scope',function($scope){
    $scope.message = "hey y'all";

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            belt: $scope.newNinja.belt,
            rate: parseInt($scope.newNinja.rate),
            available: true
        });

        $scope.newNinja.name = "";
        $scope.newNinja.belt = "";
        $scope.newNinja.rate = "";


    };

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja,1);
    };

    $scope.ninjas = [
        {
            name: "yoshi",
            belt: "green",
            rate: 50,
            available : true
        },
        {
            name: "Crystal",
            belt: "red",
            rate: 30,
            available : true
        },
        {
            name: "Ryu",
            belt: "black",
            rate: 20,
            available : false
        },
        {
            name: "Shaun",
            belt: "brown",
            rate: 45,
            available : true
        }
    ];
}]);