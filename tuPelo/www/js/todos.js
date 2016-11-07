angular.module('app.todos',['firebase'])

.service('Weeks', ['$firebaseArray', function( $firebaseArray, $scope){
      
       var ref = firebase.database().ref().child('OperationTimes');
      var ref2 = ref.child('days');
      var days = $firebaseArray(ref);
      
      var weekList = [
    { text: "Monday", checked: false, id: 1 },
    { text: "Tuesday", checked: false, id: 2 },
    { text: "Wednesday", checked: false, id: 3 },
    { text: "Thursday", checked: false, id: 4 },
    { text: "Friday", checked: false, id: 5 },
    { text: "Saturday", checked: false, id: 6},
    { text: "Sunday", checked: false, id: 7 }
  ];
  var weeks = {
    'weekList': weekList,
    
    addDays: function(from, to)
    {
        ref2.set({
          Monday: {
        times: {
            'from': from,
            'to': to
        }
            
          }
        });
        
    },
    
      addWeek: function(mon)
    {
        ref2.set({
            Monday: {
              'from': '8:00am',
              'to': '5:00pm'
            }
          
        });
        
    }
  }
  return weeks;
      
    }])


.service('Todos', ['$firebaseArray',function($firebaseArray, $scope){
    
    var ref = firebase.database().ref().child('employees');
    
    var items = $firebaseArray(ref);
    
    var todos = {
    'items': items,
    addItem: function(name, email, phone, password)
    {
        ref.child(phone).set({
            'name': name,
            'email': email,
            'phone': phone,
            'password':password,
            'finished': false
        });
        
    },
    setFinished:function(item, newV)
    {
     item.finished = newV;
     item.$save(item);
    }
        
    }
    return todos;


}])

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