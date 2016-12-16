angular.module('pproject').service('mainService', function($http, $q) {

  var loggedInUser = null;


  this.getProjects = function() { //function getting from database
    return $http({ //http call from database
      method: 'GET',
      url: 'http://localhost:5555/projects'
    });
  };

  this.getUsers = function() { //function getting from database
    return $http({ //http call from database
      method: 'GET',
      url: 'http://localhost:5555/users'
    });
  };

  this.getUserId = function(userid) {
    return $http({
      method: 'GET',
      url: '/user/commendations/' + userid
    }).then(function(response){
      return response.data;
    })
  };

  this.getCompanies = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:5555/companies'
    })
  };

  this.getCompanyId = function(companyid){
    return $http({
      method: 'GET',
      url: '/company/projects/' + companyid
    }).then(function(response){
      return response.data;
    })
  };

  this.postNewUser = function(user){
    // console.log("this is the service", user);
    return $http({
      method: 'POST',
      url: '/register',
      data: user
    });
  };

  this.postNewCompany = function(company){
    return $http({
      method: 'POST',
      url: '/company',
      data: company
    })
  };
  this.postNewProject = function(project){
    return $http({
      method: 'POST',
      url: '/company/projects/' + project.companyid,
      data: project
    }).then(function(response){

      return response.data;
    });
  };
  this.deleteCurrentUser = function(userid){
    // console.log('this is from the service:', userid)
    return $http({
      method: 'DELETE',
      url: '/user/' + userid
    });
  };
  this.deactCurrentCompany = function(companyid){

    return $http({
      method: 'PUT',
      url: '/company/projects/' + companyid
    });
  };

  this.login = function(user) {
    return $http({
    method: 'post',
    url: '/login',
    data: user
  }).then(function(response) {
    return response;
  });
};


this.getCurrentUser = function() {
  // console.log('newest log', loggedInUser);
  if(loggedInUser){
    // console.log('hello from service');
    return $q.when(loggedInUser);
  }
  return $http({
    method: 'GET',
    url: '/me'
  }).then(function(response) {
    loggedInUser = response;
    // console.log(response);
    return response;
  });
};

this.removeLoggedInUser = function(){
  loggedInUser = null;
}

this.postCom = function (com) {
  return $http({
    method: 'POST',
    url: '/user/commendation',
    data: com
  }).then(function(response) {
    return response;
  });
};
this.getCompProj = function(){
  return $http({
    method: 'GET',
    url: '/company/projects'
  }).then(function(response) {
    return response;
  });
};
this.getUserInfo = function(id){
  // console.log('teh service', id);
  return $http({
    method: 'GET',
    url: '/user/' + id
  }).then(function (response) {
    return response;
  })
};

this.logOut = function(){
  return $http({
    method: 'GET',
    url: '/logout'
  })
};

})
