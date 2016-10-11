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
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.employees', {
    url: '/Manager_Employee',
    views: {
      'side-menu21': {
        templateUrl: 'templates/employees.html',
        controller: 'employeesCtrl'
      }
    }
  })

  .state('menu.fullCalendar', {
    url: '/Manager_Fullcalendar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fullCalendar.html',
        controller: 'fullCalendarCtrl'
      }
    }
  })

  .state('menu.myCalendar', {
    url: '/Manager_Mycalendar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myCalendar.html',
        controller: 'myCalendarCtrl'
      }
    }
  })

  .state('menu.detailedCalendar', {
    url: '/Manager_DetailCalendar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailedCalendar.html',
        controller: 'detailedCalendarCtrl'
      }
    }
  })

  .state('menu', {
    url: '/Manager_sideMenu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.employeeAdd', {
    url: '/Add_Employee',
    views: {
      'side-menu21': {
        templateUrl: 'templates/employeeAdd.html',
        controller: 'employeeAddCtrl'
      }
    }
  })

  .state('menu.test1', {
    url: '/justTest',
    views: {
      'side-menu21': {
        templateUrl: 'templates/test1.html',
        controller: 'test1Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Manager_sideMenu/Manager_Mycalendar')

  

});