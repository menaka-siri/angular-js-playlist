var myNinjaApp = angular.module('myNinjaApp',['ngRoute']);

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/home',{
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when('/directory',{
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        })
        .when('/contact',{
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success',{
            templateUrl: 'views/contact-success.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}])


myNinjaApp.run(function(){

});

myNinjaApp.directive('randomNinja', [function(){
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title:  '='
        },
        templateUrl:'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
}]);

myNinjaApp.controller('NinjaController', ['$scope','$http',function($scope, $http){
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

    $http.get('data/ninjas.json').then(function(response){
       $scope.ninjas = response.data; 
    },function (error){
     
    });

}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

    $scope.sendMessage = function(){
        $location.path('contact-success')
    };
}]);