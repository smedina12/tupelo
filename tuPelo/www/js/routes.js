

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



