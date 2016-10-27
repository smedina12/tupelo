angular.module('app.controllers', [])


  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});




.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('employeesCtrl', 
function($scope, $stateParams, $firebaseObject, Todos){
  //  var ref = firebase.database().ref();
//$scope.name = $firebaseObject(ref);


$scope.items = Todos.items;

    
    

  })
   
.controller('fullCalendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myCalendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('detailedCalendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('employeeAddCtrl',
function ($scope, $stateParams, $firebaseObject, Todos) {
    
    $scope.data = {
        'name': '',
        'email': '',
        'phone': '',
        'pass': ''
        
    };
    $scope.addItem = function(){
        Todos.addItem($scope.data.name, $scope.data.email, $scope.data.pass, $scope.data.phone);
        alert('Form submitted');
    };
    
     $scope.doClick = function () {
         

    
 
  
//var ref = firebase.database().ref().child("messages");
//$scope.messages = $firebaseObject(ref);



    
   /*$scope.add=function(){
    $scope.users.$add({
      text: $scope.name,
      email: $scope.email,
      phone: $scope.phone,
      pass: $scope.pass
    });
   }*/
    //$scope.user = {name: user.name, phone: user.phone, email: user.email, password:user.pass};
    
  //var user   = {'name': $scope.name, 'email': $scope.email,'phone': $scope.phone, 'pass': $scope.pass};
// var name = document.getElementById("name").value
  
    //=$scope.name;
//var employee = new {};
//var employees = {
    
  //  'name': $scope.employees.name
    //$scope.employees.add($scope.employees.name)
    
//};
//var users ={phone:'8787878678', password:'idk', name: 'idk', email:'sample@me.com'}
    
//linksRef = firebase.database().ref().child('employees');
//linksRef.push(users);

     };
    
})
 
 
 
 
 
   
.controller('test1Ctrl',
function($scope, $stateParams, $firebaseObject, Todos){
    var ref = firebase.database().ref();
$scope.name = $firebaseObject(ref);


$scope.items = Todos.items;


/*function ($scope, $stateParams, Employees) {

    $scope.items = Employees.items;*/
    
    

  })
  
  
  
  
  .controller('itemCtrl',
function($scope, $stateParams, Todos){
   // var ref = firebase.database().ref();
//$scope.name = $firebaseObject(ref);
//$scope.chat = Chats.get($stateParams.chatId);

//$scope.itemid = Todos.items.$id;

//$scope.itemid = $stateParams.item;
$scope.item = Todos.items[Todos.items.$indexFor($stateParams.item)];

/*function ($scope, $stateParams, Employees) {

    $scope.items = Employees.items;*/
    
    

  })
    


.controller('employeeAppointmentsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('employeeCalendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('employeeReviewsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('employeeCustomerSettingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('employeeMenuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])



.controller('signUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('customerSignUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('welcomePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('hairstylistCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 