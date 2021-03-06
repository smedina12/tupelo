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
   
 
.controller('fullCalendarCtrl',  ['$scope', '$firebaseArray',
function fullCalendarCtrl($scope, $compile, uiCalendarConfig, $firebaseArray, $http) {
  

  
    

var ref = firebase.database().ref().child('cal');
 //$scope.times = $firebaseArray(ref);
// var justDate;

  ref.once("value").then(function(snapshot) {
      
    ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var child = childSnapshot.val();
    //console.log('here', child.id);
      
    
    
      //if(start != $scope.events.start){
    $scope.doRefresh = function() {
    };
    var start = moment(child.start);
    var end = moment(child.end);
        $scope.events.push({
        title: child.title,
        start: start,
        end: end,
        url: '#/Manager_sideMenu/Manager_DetailCalendar',
        eventOverlap: false,
        stick: true
      });
 

    
  });
});
    
 
    


  });
  //console.log('here', justDate);
  
 
      var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
   /* event source that pulls from google.com */
    $scope.eventSource = {
           // url: "https://calendar.google.com/calendar/embed?src=p25394n6ig7qi9jur3f3uhsig4%40group.calendar.google.com",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/New_York' // an option!
    };
    
    /* event source that contains custom events on the scope */
    $scope.events = [];
    
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };
    
   $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: []
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + ' was clicked ');
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) { 
        element.attr({'tooltip': event.title,
                     'tooltip-append-to-body': true});
        //$compile(element)($scope);
    };

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 750,
        editable: true,
        allDaySlot: false,
        header:{
          left: 'agendaWeek, month, agendaDay',
          center: 'title',
          right: 'today prev,next'
        },

        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

   
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
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
 
 
 
 
 
   
  
.controller('test1Ctrl', function($scope, $stateParams, $firebaseObject, DateTime, $ionicPopup){
  
  
  
  var ref = firebase.database().ref().child('cal');
 //$scope.times = $firebaseArray(ref);
// var justDate;
var child;
  ref.once("value").then(function(snapshot) {
      
    ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
     child = childSnapshot.val();
    //console.log('here', child.id);
      
    
  });
});
})
 

//sets the lenguage  
moment.locale('en'); 
$scope.data = {
        'dateDropDownInput': '',
        'title': 'id4'
        
    };
   // $scope.$broadcast('end-date-changed');
    
    
    
    $scope.one = $scope.data.dateDropDownInput;
    $scope.one.toString();
     $scope.addTime = function(){
        var currentDate = moment().format('YYYY-MM-DDTHH:mm:ss');
        
        if(moment($scope.data.dateDropDownInput).isAfter(currentDate, 'hour') == false)
    {
     alert('You can not make same day appointments or select dates in the past.');
     console.log(child.start);
     
    }else{
      
      for(var i=0; i < child.length;i++)
{
 if(child.start[i] == $scope.data.dateDropDownInput){
   alert('Already selected');

   
 }
}
  
        DateTime.addTime($scope.data.dateDropDownInput, $scope.data.title);
   }
    };
        //alert('Form submitted');
    
    
$scope.isDisabledDate = function(currentDate, mode) {
  return mode === 'day' && (currentDate.getDay() === 0 || currentDate.getDay() === 6);
};
    
    
    
    
    
    
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

.controller('timeOffCtrl', function($scope, Weeks, $state) {

  $scope.weekList = Weeks.weekList;
  
  $scope.days = {
        'from':'',
        'to': ''
    };
    $scope.addDays = function(){
        Weeks.addDays($scope.days.from, $scope.days.to)
        alert('Form submitted');
        //$state.go('/Manager_sideMenu/settings');
        
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
function fullCalendarCtrl($scope, $compile, uiCalendarConfig, $firebaseArray) {
    
    
    
var ref = firebase.database().ref().child('cal');
 //$scope.times = $firebaseArray(ref);
// var justDate;

  ref.once("value").then(function(snapshot) {

      
      
    ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var child = childSnapshot.val();

console.log(child.end);
    
        $scope.events.push({
        title: child.title,
        start: child.start,
        end: child.end,
        stick: true,
      });

    
  });
});
    
 
    


  });
  //console.log('here', justDate);
  
 
      var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
   /* event source that pulls from google.com */
    $scope.eventSource = {
           // url: "https://calendar.google.com/calendar/embed?src=p25394n6ig7qi9jur3f3uhsig4%40group.calendar.google.com",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/New_York' // an option!
    };
    
    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999, title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999, title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'https://google.com/'}
    ];
    
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };
    
   $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'https://google.com/'}
        ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + ' was clicked ');
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) { 
        element.attr({'tooltip': event.title,
                     'tooltip-append-to-body': true});
        //$compile(element)($scope);
    };

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 750,
        editable: true,
        allDaySlot: false,
        header:{
          left: 'agendaWeek, month, agendaDay',
          center: 'title',
          right: 'today prev,next'
        },

        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

    $scope.changeLang = function() {
      if($scope.changeTo === 'Hungarian'){
        $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
        $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
        $scope.changeTo= 'English';
      } else {
        $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        $scope.changeTo = 'Hungarian';
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];


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
function($scope, $stateParams, Todos){
  //  var ref = firebase.database().ref();
//$scope.name = $firebaseObject(ref);


$scope.items = Todos.items;

    
    

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
   
.controller('logInCtrl', ['$scope', '$stateParams','$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

    $scope.data = {
        'email': '',
        'password': ''
    }
    
    $scope.error = '';
    
  $scope.redirect = function() {    
    $location.path('/page1/info');
  };
    

}])
      
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams ) {
    
    $scope.data = {
        'name': '',
        'username': '',
        'password': ''
    }
    
    $scope.error='';

    $scope.signup = function(){
        
        $scope.error = '';

        $ionicAuth.signup($scope.data).then(function() {
            // `$ionicUser` is now registered
            $ionicAuth.login('basic', $scope.data).then(function(){
              $state.go('menu.myCalendar');
            });
        }, function(err) {
            
            var error_lookup = {
                'required_email': 'Missing email field',
                'required_password': 'Missing password field',
                'conflict_email': 'A user has already signed up with that email',
                'conflict_username': 'A user has already signed up with that username',
                'invalid_email': 'The email did not pass validation'
            }    
        
            $scope.error = error_lookup[err.details[0]];
        });
    }


    

}]);
 