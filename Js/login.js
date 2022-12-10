var app= angular.module("fundooapp",['ngStorage']);

app.controller("fundooappCtrl",function($scope,$http,$localStorage,$window){
   
    $scope.login=function(email, password){
        var data={
            email:email,
            password:password
        }
        //call the service
        $http.post("https://localhost:44365/api/User/Login",JSON.stringify(data))
        .then(function(response){
            console.log(response);

            if(response.data){
                $localStorage.message=response.data.data;
                console.log($localStorage.message);
                var url = "DashBoard.html";
                $window.location.href = url;
                $scope.email=response.data.email;
                $scope.password=response.data.password;
            }
        },function(error){
            console.log(error)
        })
    };
})