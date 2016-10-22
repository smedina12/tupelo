angular.module('employees', ['firebase'])

.run(function(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDZ7Vt-uvCKiWHheqow3m0IU3DUm-Etc0M",
      authDomain: "tupelo-8d8db.firebaseapp.com",
      databaseURL: "https://tupelo-8d8db.firebaseio.com",
      storageBucket: "tupelo-8d8db.appspot.com",
      messagingSenderId: "559675911359"
    };
    firebase.initializeApp(config);
})
.service('Employees', ['$firebaseArray', function($firebaseArray){
    
     
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
  }*/
 var ref = firebase.database().ref().child('employees');
  
  var items = $firebaseArray(ref);

    
  var employee = 
  {
   'items':items 
  }
   return employee;

}]);


