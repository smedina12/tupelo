angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.settings', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.employees', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/employees.html',
        controller: 'employeesCtrl'
      }
    }
  })

  .state('fullCalendar', {
    url: '/page4',
    templateUrl: 'templates/fullCalendar.html',
    controller: 'fullCalendarCtrl'
  })

  .state('menu.myCalendar', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myCalendar.html',
        controller: 'myCalendarCtrl'
      }
    }
  })

  .state('menu.detailedCalendar', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailedCalendar.html',
        controller: 'detailedCalendarCtrl'
      }
    }
  })

  .state('menu.fullCalendar2', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fullCalendar2.html',
        controller: 'fullCalendar2Ctrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.signup', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page8')

  

});