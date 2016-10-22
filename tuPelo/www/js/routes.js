
var user = 'Owner';
//var user = 'Customer';
if(user == 'Owner')
{

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

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

$urlRouterProvider.otherwise('/Manager_sideMenu/Manager_Mycalendar')

  

});
}

else if(user == 'Customer')
{
 angular.module('app.routes', ['Items'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.signUp', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'customer_view/signUp.html',
        controller: 'signUpCtrl'
      }
    }
  })

  .state('tabsController.cartTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'customer_view/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'customer_view/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'customer_view/tabsController.html',
    abstract:true
  })

  .state('customerSignUp', {
    url: '/signuppage',
    templateUrl: 'customer_view/customerSignUp.html',
    controller: 'customerSignUpCtrl'
  })

  .state('welcomePage', {
    url: '/welcomepage',
    templateUrl: 'customer_view/welcomePage.html',
    controller: 'welcomePageCtrl'
  })

  .state('login', {
    url: '/loginpage',
    templateUrl: 'customer_view/login.html',
    controller: 'loginCtrl'
  })

  .state('hairstylist', {
    url: '/hairstylistpage',
    templateUrl: 'customer_view/hairstylist.html',
    controller: 'hairstylistCtrl'
  })

$urlRouterProvider.otherwise('/loginpage')

  

});
}
