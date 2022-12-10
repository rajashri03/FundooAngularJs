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
  controller('TakenoteCtrl',function(){
    var note=this;
    note.toggle=false;

    note.list=[
      {name:'raj',age:2},
      {name:'rajs',age:4}
    ];

    note.addNote=function(name,age){
      var data={
        name:name,
        age:age
    }
      console.log("hi")
      note.list.push({name:data.name,age:data.age});
      note.name='';
      note.age=0;
    };
  });
