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
function($scope, DateTime) {
    $(document).ready(function() {
	    var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();



$('#calendar').fullCalendar({
    dayClick: function(date, jsEvent, view) {

        alert('Clicked on: ' + date.format());

        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        alert('Current view: ' + view.name);

        // change the day's background color just for fun
        $(this).css('background-color', 'red');

    }
});
    // render the event on the calendar
	// the last `true` argument determines if the event "sticks" 
				$('#calendar').fullCalendar('renderEvent', false);

   var calendar = $('#calendar').fullCalendar({
    events: [
        {
            title: 'My Event',
            start: '2016-11-13 12:00:00"',
            end: "2016-11-13 12:30:00",
            description: 'This is a cool event'
        }
        // more events here
    ],
    eventRender: function(event, element) {
        element.qtip({
            content: event.description
        });
    }
});
   //$scope.uiConfig.fullCalendar( 'renderEvent', event  );
    //$('#calendar').fullCalendar('renderEvent', {
      // title: 'My Event 2',
       //start: "2016-11-12 12:00:00",
       //end: "2016-11-12 12:30:00"
//});
       //renderEvent(DateTime);
    
    //$scope.startDate = DateTime.times;
    //$scope.endDate = DateTime.times;
    
    $scope.eventSource = [];
  $scope.OnSelect = function(start, end) {
      
      var title = prompt('Event Title:');
				if (title) {
					calendar.fullCalendar('renderEvent',
						{
							title: title,
							start: start,
							end: end
						},
						true // make the event "stick"
					);
				}
				calendar.fullCalendar('unselect');
  };
 
    
  $scope.uiConfig = {
      
   defaultView: 'agendaWeek',
   disableDragging: true,
   allDaySlot: false,
   selectable: true,
   unselectAuto: true,
   selectHelper: true,
   editable: false,
   maxTime: "23:59:00",
   minTime: "8:00:00",
   eventDurationEditable: false, // disabling will show resize
   columnFormat: {
    week: 'dd-MM-yyyy',
    day: 'D-MMM-YYYY'
   },
   height: 780,
   maxTime: "24:00:00",
   minTime: "8:00:00",
   eventDurationEditable: false, // disabling will show resize
   columnFormat: {
    month: 'ddd',    // Mon
    week: 'ddd', // Mon 
    day: 'dddd M/d',  // Monday 9/7
    agendaDay: 'dddd d'
    },

    titleFormat: {
        month: 'MMMM yyyy', // September 2009
        week: "MMM ", // September 2009
        day: 'MMMM yyyy'                  // Tuesday, Sep 8, 2009
    },

   axisFormat: 'h:mm',
   weekends: true,
   header: {
    left: ' agendaWeek today month',
    center: 'title',
    right: 'prev next'
   },
   select: $scope.onSelect,
   eventClick: $scope.eventClick,
   events: [
				{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d-3, 16, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d+4, 16, 0),
					allDay: false,
					className: 'info'
				},
				{
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false,
					className: 'important'
				},
				{
					title: 'Lunch',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false,
					className: 'important'
				},
				{
					title: 'Birthday Party',
					start: new Date(y, m, d+1, 19, 0),
					end: new Date(y, m, d+1, 22, 30),
					allDay: false,
				},
				{
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/',
					className: 'success'
				}
			],

  };
  
    });


 }])


   
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
   
.controller('employeeAddCtrl','ngLocale',
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
 
 
 
 
 
   
  

.controller('test1Ctrl', 
function ($scope, ionicDatePicker) {
      moment.locale('en'); 
      
      //$scope = data.dateDropDownInput
      //var ref = firebase.database().ref().child('cal');
      //var dates = $firebaseArray(ref);

    

  
})


	

  
  
.controller('hoursOfOperationsCtrl',  function($scope, Weeks, filterFilter, $firebaseArray) {

  $scope.weekList = Weeks.weekList;
  


    $scope.weekList = [
    { name: "Monday", selected: true, from:'8:00am',to:'5:00pm' },
    { name: "Tuesday", selected: true, from:'8:00am',to:'5:00pm'},
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
  
  
var ref = firebase.database().ref().child('Calendar');

var ref2 = ref.child('days');

  //var fb = $firebaseObject(ref);

  // sync as object 
  var syncObject = $firebaseObject(ref);
  
  // three way data binding
  syncObject.$bindTo($scope, 'days');
  
  
  $scope.reset = function() {    

    ref2.set({
      monday: {
        name: 'Monday',
        event: {
          72: {
              id:'8',
              title: 'title',
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
 