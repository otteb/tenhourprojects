angular.module('pproject').service('mainService', function($http) {
  this.getProjects = function() { //function getting from database
    return $http({ //http call from database
      method: 'GET',
      url: 'http://localhost:5555/projects'
    });
  }

  this.getUsers = function() { //function getting from database
    return $http({ //http call from database
      method: 'GET',
      url: 'http://localhost:5555/users'
    });
  }

  this.getUserId = function(userid) {
    return $http({
      method: 'GET',
      url: '/user/commendations/' + userid
    }).then(function(response){
      return response.data;
      
    })
  }
//make method to grab specific user object
//return entire object

})
