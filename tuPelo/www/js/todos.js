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
    'items': items
        
    }
    return todos;
}])

