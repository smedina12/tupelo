angular.module('app.todos',['firebase'])

.service('Weeks', ['$firebaseArray', function( $firebaseArray, $scope){
      
       var ref = firebase.database().ref().child('OperationTimes');
      var ref2 = ref.child('days');
      var days = $firebaseArray(ref);
      var weekList = [
    { text: "Monday", checked: true, },
    { text: "Tuesday", checked: false },
    { text: "Wednesday", checked: false },
    { text: "Thursday", checked: false },
    { text: "Friday", checked: false },
    { text: "Saturday", checked: false },
    { text: "Sunday", checked: false }
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