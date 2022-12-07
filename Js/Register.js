var app= angular.module("fundooapp",[]);

app.controller("fundooappCtrl",function($scope,$http){
    

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


    
    
})