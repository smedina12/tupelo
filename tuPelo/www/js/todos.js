angular.module('todos',['firebase'])

    


.service('Todos', ['$firebaseArray',function($firebaseArray){
    
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

