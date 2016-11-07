angular.module('app.controllers', ['firebase'])


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
  $scope.OnSelect = function(start, end) {
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
    titleFormat: 'MMM-YY',
   axisFormat: 'H:mm',
   weekends: true,
   header: {
    left: ' agendaWeek today month',
    center: 'title',
    right: 'prev next '
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
        Todos.addItem($scope.data.name, $scope.data.email, $scope.data.phone, $scope.data.pass);
        alert('Form submitted');
    };
    
     $scope.doClick = function () {
         

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
  
  
.controller('hoursOfOperationsCtrl',  function($scope, Weeks, filterFilter, $firebaseArray) {

  $scope.weekList = Weeks.weekList;
  


    $scope.weekList = [
    { name: "Monday", selected: true, from:'8:00am',to:'5:00pm' },
    { name: "Tuesday", selected: false, from:'8:00am',to:'5:00pm'},
    { name: "Wednesday", selected: true , from:'8:00am',to:'5:00pm'},
    { name: "Thursday", selected: false, from:'8:00am',to:'5:00pm' },
    { name: "Friday", selected: false, from:'8:00am',to:'5:00pm' },
    { name: "Saturday", selected: false, from:'8:00am',to:'5:00pm'},
    { name: "Sunday", selected: false, from:'8:00am',to:'5:00pm'}
  ];
    
       // selected days
   $scope.selection = [];
   
 // helper method to get selected days
   $scope.selectedDays = function selectedDays() {
    return filterFilter($scope.weekList, { selected: true });
  };
  
  // watch days for changes
  $scope.$watch('weekList|filter:{selected:true}', function (nv) {
    $scope.selection = nv.map(function (weekList) {
      return weekList.name;
    });
  }, true);

   
   var ref = firebase.database().ref().child('OperationTimes');
      var ref2 = ref.child('days');
   $scope.addWeek = function(){
       ref2.set({
            SelectedDays:  $scope.weekList
            });
        alert('Form submitted');
        console.log($scope.weekList[0].name);
        console.log($scope.weekList);
        console.log($scope.weekList.name);
    };
    
   
        
          


  
})

.controller('timeOffCtrl', function($scope, Weeks) {

  $scope.weekList = Weeks.weekList;
  
  $scope.days = {
        'from':'',
        'to': ''
    };
    $scope.addDays = function(){
        Weeks.addDays($scope.days.from, $scope.days.to)
        alert('Form submitted');
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
   
.controller('calendarCtrl', function($scope, $firebaseObject) {
  
  // connect to firebase 
  //var ref = new Firebase("https://tupelo-8d8db.firebaseio.com/days"); 
  
  
var ref = firebase.database().ref().child('days');
  //var fb = $firebaseObject(ref);

  // sync as object 
  var syncObject = $firebaseObject(ref);
  
  // three way data binding
  syncObject.$bindTo($scope, 'days');
  
  
  $scope.reset = function() {    

    $firebaseObject(ref).set({
      monday: {
        name: 'Monday',
        slots: {
          72: {
            time: '9:00am',
            booked: false
          },
          900: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          72: {
            time: '9:00am',
            booked: false
          },
          900: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });    
  }
  
  
  
})
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
 