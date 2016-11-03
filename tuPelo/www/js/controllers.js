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
function($scope, $stateParams, Todos){
  //  var ref = firebase.database().ref();
//$scope.name = $firebaseObject(ref);


$scope.items = Todos.items;

    
    

  })
   
.controller('fullCalendarCtrl',  ['$scope',
function($scope) {  
    
    $scope.eventSource = [];
  $scope.onSelect = function(start, end) {
   console.log("Event select fired");
  };
  $scope.eventClick = function(event, allDay, jsEvent, view) {
   alert("Event clicked");
  };
  $scope.uiConfig = {
   defaultView: 'agendaWeek',
   disableDragging: true,
   allDaySlot: false,
   selectable: true,
   unselectAuto: true,
   selectHelper: true,
   editable: false,
   maxTime: "21:00:00",
   minTime: "8:00:00",
   eventDurationEditable: false, // disabling will show resize
   columnFormat: {
    week: 'dd-MM-yyyy',
    day: 'D-MMM-YYYY'
   },
   height: 1550,
   maxTime: "21:00:00",
   minTime: "8:00:00",
   eventDurationEditable: false, // disabling will show resize
   columnFormat: {
    week: 'dd',
    day: 'D'
   },
   titleFormat: {
    day: 'dd-MM-yyyy'
   },
   axisFormat: 'H:mm',
   weekends: true,
   header: {
    left: 'prev',
    center: '',
    right: 'next'
   },
   select: $scope.onSelect,
   eventClick: $scope.eventClick,
   events: [{
    "id": "8",
    "title": "Adam Scott",
    "start": "2016-11-02 10:30:00",
    "end": "2016-11-02 12:00:00",
    "allDay": false,
    "color": "#734187"
   }]
  };

 }
])

.directive('disableTap', function($timeout) {
 return {
   link: function() {

     $timeout(function() {
       var tab = document.getElementsByClassName('fc-widget-content');

       for (i = 0; i < tab.length; ++i) {
  tab[i].setAttribute('data-tap-disabled', 'true')
   console.log(tab[i]);
}
        },500);
   }
 };
})
   
.controller('myCalendarCtrl', 
function($scope, Events,$ionicPlatform,$timeout) {
	
	$ionicPlatform.ready(function() {
		Events.get().then(function(events) {
			//console.log("events", JSON.stringify(events));	
			$scope.events = events;
		});
	});
	
	$scope.addEvent = function(event,idx) {
		console.log("add ",event);
		
		Events.add(event).then(function(result) {
			console.log("done adding event, result is "+result);
			if(result === 1) {
				//update the event
				$timeout(function() {
					$scope.events[idx].status = true;
					$scope.$apply();
				});
			} else {
				//For now... maybe just tell the user it didn't work?
			}
		});

		
	};
	
})
   
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
 
 
 
 
 
   
.controller('test1Ctrl', ['$scope',
function($scope) {  
    
    $scope.eventSource = [];
  $scope.onSelect = function(start, end) {
   console.log("Event select fired");
  };
  $scope.eventClick = function(event, allDay, jsEvent, view) {
   alert("Event clicked");
  };
  $scope.uiConfig = {
   defaultView: 'agendaWeek',
   disableDragging: true,
   allDaySlot: false,
   selectable: true,
   unselectAuto: true,
   selectHelper: true,
   editable: false,
   maxTime: "21:00:00",
   minTime: "8:00:00",
   eventDurationEditable: false, // disabling will show resize
   columnFormat: {
    week: 'dd-MM-yyyy',
    day: 'D-MMM-YYYY'
   },
   height: 1550,
   maxTime: "21:00:00",
   minTime: "8:00:00",
   eventDurationEditable: false, // disabling will show resize
   columnFormat: {
    week: 'dd',
    day: 'D'
   },
   titleFormat: {
    day: 'dd-MM-yyyy'
   },
   axisFormat: 'H:mm',
   weekends: true,
   header: {
    left: 'prev',
    center: '',
    right: 'next'
   },
   select: $scope.onSelect,
   eventClick: $scope.eventClick,
   events: [{
    "id": "8",
    "title": "Adam Scott",
    "start": "2016-11-02 10:30:00",
    "end": "2016-11-02 12:00:00",
    "allDay": false,
    "color": "#734187"
   }]
  };

 }
])

.directive('disableTap', function($timeout) {
 return {
   link: function() {

     $timeout(function() {
       var tab = document.getElementsByClassName('fc-widget-content');

       for (i = 0; i < tab.length; ++i) {
  tab[i].setAttribute('data-tap-disabled', 'true')
   console.log(tab[i]);
}
        },500);
   }
 };
	
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

  
.controller('customerMenuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('chooseAHairstylistCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('stylistCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('calendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('reviewsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('appointmentTimeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('appointmentCanceledCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('welcomePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
   
.controller('hairstylistCtrl', 
function($scope, $stateParams, Todos){

$scope.items = Todos.items;

    
    

  })

.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('logInCtrl', ['$scope', '$stateParams', 'Todos', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, SignIn, $state) {
    $scope.data2 = {
        'idField': '',
        'passField': ''
    };
    var  checkIn = function(){

    if($scope.data2.idField == SignIn.add.admin.id && $scope.data2.passField == SignIn.add.admin.password )
    {
        $state.go('menu.myCalendar');
    } 
    else if($scope.data2.idField == SignIn.add.customer.id && $scope.data2.passField == SignIn.add.customer.password)
    {
        $state.go('tabsController.signUp');
    }
    else if($scope.data2.idField == SignIn.add.employee.id && $scope.data2.passField == SignIn.add.employee.password )
    {
        $state.go('employeeMenu.employeeAppointments');
       
    }
    else{
        console.log("id or password does not exist!");
    }
        alert('Form submitted');
    }

}])
      
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
 