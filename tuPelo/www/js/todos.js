angular.module('app.todos',['firebase'])

.service('Weeks', ['$firebaseArray', function( $firebaseArray, $scope){
      
       var ref = firebase.database().ref().child('OperationTimes');
      var ref2 = ref.child('days');
      var ref3 = ref2.child('SelectedDays');
      var days = $firebaseArray(ref);
      
      var weekList = $firebaseArray(ref3);
      
     
  var weeks = {
    'weekList': weekList,
    
    addDays: function(from, to)
    {
        var newtime = {
  "from": from,
  "to": to
  
  
};

var newtime2 = {
  "from": from,
  "to": to
  
  
};
  ref3.child("0").update(newtime);
  ref3.child("1").update(newtime2);
  
        
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

.service('DateTime', ['$firebaseArray',function($firebaseArray, $scope) {
  
        var ref = firebase.database().ref().child('employees');
    
    var date = $firebaseArray(ref);
    
    $scope.start = "";
    $scope.end = "";
}]);


