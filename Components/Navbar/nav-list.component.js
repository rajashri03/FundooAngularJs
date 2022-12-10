// angular.module("fundooApp").component("fundooApp",
// {
//     template: "<div><div class='header'> <div class='icons'> <img src='../../Images/menu.png'/> <img src='../../Images/keep.png' class='keepimg'/><h1>FundooNotes</h1></div><div class='search'><img src='../../Images/search.png' height='20px'/>  <input type='text' placeholder='Search'/></div><div class='icons'><img src='../../Images/refresh.png'/><img src='../../Images/list.png' className='hideimg'/><img src='../../Images/setting.png' className='hideimg'/></div><div class='icons'><img src='../../Images/dot.png' className='hideimg'/><div class='profile' className='hideimg'>r</div> </div></div></div>",
//     controller: function GreetUserController() {
//         this.user = 'world';
//       }
// });

// Register `phoneList` component, along with its associated controller and template
angular.
  module('fundooApp').
  component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: "Components/Navbar/Navbar.html",
    
  }).
  controller('TakenoteCtrl',function($scope,$http){
    var note=this;
    note.toggle=false;
    $scope.showButtons = [0];

  $scope.toggle1 = function() {
    $scope.showButtons = [1];
  };
  $scope.postdata=function(title,note){
    var data={
      title: title,
      note: note,
    }
    //call the service
    $http.post("https://localhost:44365/api/Notes/Add",JSON.stringify(data))
    .then(function(response){
        console.log(response);

        if(response.data){
            $scope.msg="Post Data Submitted";
          
            $scope.title=response.data.title;
            $scope.note=response.data.note;
        }
    },function(error){
        console.log(error)
    })
};


  });
