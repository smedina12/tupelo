angular.module('app.todos',['firebase'])

    


.service('Todos', ['$firebaseArray',function($firebaseArray, $scope){
    
    
    
    /*var items = [
     {
         'title': 'Testing Item 1',
         'finished': false,
         '$id': 1
     },
     {
         'title': 'Testing Item 2',
         'finished': true,
         '$id': 2
     }
     
    ];*/
    
    var ref = firebase.database().ref().child('employees');
    var items = $firebaseArray(ref);
    
    var todos = {
    'items': items,
    addItem: function(name, email, phone, password)
    {
        items.$add({
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