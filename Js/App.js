var app= angular.module("fundooapp",['ngStorage']);

app.controller("fundooappCtrl",function($scope,$http,$localStorage){
    

    $scope.postdata=function(firstName,lastName,email, password){
        var data={
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        }
        //call the service
        $http.post("https://localhost:44365/api/User/Add",JSON.stringify(data))
        .then(function(response){
            console.log(response);

            if(response.data){
                $scope.msg="Post Data Submitted";
              
                $scope.firstName=response.data.firstName;
                $scope.lastName=response.data.lastName;
                $scope.email=response.data.email;
                $scope.password=response.data.password;
            }
        },function(error){
            console.log(error)
        })
    };


    
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
                console.log($localStorage.get('token'));
                $scope.email=response.data.email;
                $scope.password=response.data.password;
            }
        },function(error){
            console.log(error)
        })
    };
})