angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('addNew', {
    url: '/page4',
    templateUrl: 'templates/addNew.html',
    controller: 'addNewCtrl'
  })

  .state('barbers', {
    url: '/employees_page',
    templateUrl: 'templates/barbers.html',
    controller: 'barbersCtrl'
  })

$urlRouterProvider.otherwise('/page4')

  

});