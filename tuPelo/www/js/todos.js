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
    
    var ref = firebase.database().ref().child('Users');
    
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
            'employee': true
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
  
   var ref = firebase.database().ref().child('cal');
    
    var times = $firebaseArray(ref);
    
    
    //var time1 =times.child('id1');
    
    var DateTime = {
    'time': times,
    addTime: function(datetime, title)
    {
        ref.child(title).set({
            'start': datetime.toString(),
            'title': title
        });
        
        
        
    }

        
    }
    return DateTime;

    
    
    
}])
/*
.service('Calendar', ['$firebaseArray',function($firebaseArray, $scope) {
        
        var ref = firebase.database().ref().child('cal');
 //$scope.times = $firebaseArray(ref);
// var justDate;
var calendar = {
    refresTime: function(){

  ref.once("value").then(function(snapshot) {
    var cDate = snapshot.child("id1").val(); // { first: "Ada", last: "Lovelace"}
    var justDate = snapshot.child("id1/start").val(); // "date"
    var title = snapshot.child("id1/title").val(); // "title"
      
      
    ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var child = childSnapshot.val();
    console.log('here', child.id);
    

        $scope.events.push({
        title: child.title,
        start: child.start,
        stick: true,
      });

    
  });
});
    
 

  });
    }
}
   
   return calendar; 
    
}])

*/
