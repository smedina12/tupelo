angular.module('app.employees', [])


.service('Employees', []);
    
     
     // Might use a resource here that returns a JSON array

  // Some fake testing data
  /*var items = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    here: true
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    here: true
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    here: false
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    here: false
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    here: true
  }];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  }
function ($scope, $stateParams, $firebaseArray, $ionicUser) {
    $scope.data = 
    {
     'message': ''
     
    };
    
    
    var ref = firebase.database().ref().chilçd("messages");
    //create a syncronized array
    $scope.messages = $firebaseArray(ref);
    
    //add new items to the array
    //The massage is automatically added to firebase database!
    $scope.addMessage= function()
    {
     $scope.messages.$add({
         text: $scope.data.message,
         email: $ionicUser.details.email,
         name: $ionicUser.details.name
     });
     $scope.data.message='';
    };
    
    
    



}*/


