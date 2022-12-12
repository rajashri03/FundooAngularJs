var app=angular.module("FundooApp",['ngRoute']);
app.config(["$routeProvider",function($routeProvider){
$routeProvider.
when("/page1",{
    templateUrl:"Pages/page1.html"
}).
when("/page2",{
    templateUrl:"Pages/page2.html"
}).
when("/page3",{
    templateUrl:"Pages/page3.html"
}).
otherwise({
redirectTo:"index.html"
});
}]);
app.controller("fundooCtrl",function($scope){

});

//$routeprivder-services