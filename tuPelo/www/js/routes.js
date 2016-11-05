angular.module('app.signin', [])

.factory('SignIn', function($scope)
{
  
  var add =[];
  
  var admin = [];
	admin.push(
		{
			"id":"6789797010",
			"password":"hello"
		}	
	);
	add.push(admin);
  
  var customer = [];
  customer.push(
    {
      "id":"4045525183",
			"password":"hello"
    }
    );
    add.push(customer);
  var employee = [];
  employee.push(
    {
      "id":"6789797020",
			"password":"hello"
    }
    );
    add.push(employee);
  return add;
});



var user = 'Customer';

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
$stateProvider

      .state('tabsController.info', {
    url: '/info',
    views: {
      'tab1': {
        templateUrl: 'SignIn_view/info.html',
        controller: 'infoCtrl'
      }
    }
  })

  .state('tabsController.logIn', {
    url: '/login',
    views: {
      'tab2': {
        templateUrl: 'SignIn_view/logIn.html',
        controller: 'logInCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'SignIn_view/tabsController.html',
    abstract:true
  })

  .state('tabsController.signup', {
    url: '/signup',
    views: {
      'tab3': {
        templateUrl: 'SignIn_view/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

.state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'manager_view/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.employees', {
    url: '/Manager_Employee',
    views: {
      'side-menu21': {
        templateUrl: 'manager_view/employees.html',
        controller: 'employeesCtrl'
      }
    }
  })

  .state('menu.fullCalendar', {
    url: '/Manager_Fullcalendar',
    views: {
      'side-menu21': {
        templateUrl: 'manager_view/fullCalendar.html',
        controller: 'fullCalendarCtrl'
      }
    }
  })

  .state('menu.myCalendar', {
    url: '/Manager_Mycalendar',
    views: {
      'side-menu21': {
        templateUrl: 'manager_view/myCalendar.html',
        controller: 'myCalendarCtrl'
      }
    }
  })

  .state('menu.detailedCalendar', {
    url: '/Manager_DetailCalendar',
    views: {
      'side-menu21': {
        templateUrl: 'manager_view/detailedCalendar.html',
        controller: 'detailedCalendarCtrl'
      }
    }
  })

  .state('menu', {
    url: '/Manager_sideMenu',
    templateUrl: 'manager_view/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.employeeAdd', {
    url: '/Add_Employee',
    views: {
      'side-menu21': {
        templateUrl: 'manager_view/employeeAdd.html',
        controller: 'employeeAddCtrl'
      }
    }
  })

  .state('menu.test1', {
    url: '/justTest',
    views: {
      'side-menu21': {
        templateUrl: 'manager_view/test1.html',
        controller: 'test1Ctrl'
      }
    }
  })
  .state('menu.item', {
    url: '/items/:item',
    views: {
      'side-menu21': {
        templateUrl: 'manager_view/item.html',
        controller: 'itemCtrl'
      }
    }
    
  })
  
    

$urlRouterProvider.otherwise('/Manager_sideMenu/Manager_Mycalendar')

})


if(user == 'Customer')
{
angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('customerMenu', {
    url: '/customermenu',
    templateUrl: 'customer_view/customerMenu.html',
    controller: 'customerMenuCtrl'
  })

  .state('customerMenu.chooseAHairstylist', {
    url: '/choosestylist',
    views: {
      'side-menu21': {
        templateUrl: 'customer_view/chooseAHairstylist.html',
        controller: 'chooseAHairstylistCtrl'
      }
    }
  })

  .state('customerMenu.stylist', {
    url: '/stylist',
    views: {
      'side-menu21': {
        templateUrl: 'customer_view/stylist.html',
        controller: 'stylistCtrl'
      }
    }
  })

  .state('customerMenu.calendar', {
    url: '/customercalendar',
    views: {
      'side-menu21': {
        templateUrl: 'customer_view/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

  .state('customerMenu.reviews', {
    url: '/reviews',
    views: {
      'side-menu21': {
        templateUrl: 'customer_view/reviews.html',
        controller: 'reviewsCtrl'
      }
    }
  })

  .state('customerMenu.appointmentTime', {
    url: '/apptime',
    views: {
      'side-menu21': {
        templateUrl: 'customer_view/appointmentTime.html',
        controller: 'appointmentTimeCtrl'
      }
    }
  })

  .state('customerMenu.appointmentCanceled', {
    url: '/cancelappointment',
    views: {
      'side-menu21': {
        templateUrl: 'customer_view/appointmentCanceled.html',
        controller: 'appointmentCanceledCtrl'
      }
    }
  })

  .state('customerMenu.welcomePage', {
    url: '/customerwelcome',
    views: {
      'side-menu21': {
        templateUrl: 'customer_view/welcomePage.html',
        controller: 'welcomePageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/customermenu/customerwelcome')

  

});
}
else if(user == 'Employees')
{
  angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('employeeMenu.employeeAppointments', {
    url: '/employeeAppointments',
    views: {
      'side-menu21': {
        templateUrl: 'employee_view/employeeAppointments.html',
        controller: 'employeeAppointmentsCtrl'
      }
    }
  })

  .state('employeeMenu.employeeCalendar', {
    url: '/employeeCalendar',
    views: {
      'side-menu21': {
        templateUrl: 'employee_view/employeeCalendar.html',
        controller: 'employeeCalendarCtrl'
      }
    }
  })

  .state('employeeMenu.employeeReviews', {
    url: '/employeeReviews',
    views: {
      'side-menu21': {
        templateUrl: 'employee_view/employeeReviews.html',
        controller: 'employeeReviewsCtrl'
      }
    }
  })

  .state('employeeMenu.employeeCustomerSettings', {
    url: '/employeeCustomerSettings',
    views: {
      'side-menu21': {
        templateUrl: 'employee_view/employeeCustomerSettings.html',
        controller: 'employeeCustomerSettingsCtrl'
      }
    }
  })

  .state('employeeMenu', {
    url: '/employeeMenu',
    templateUrl: 'employee_view/employeeMenu.html',
    controller: 'employeeMenuCtrl'
  })

$urlRouterProvider.otherwise('/employeeMenu/employeeAppointments')

  

});
}