angular.module('pproject', ['ui.router']).config(function($urlRouterProvider, $stateProvider)
{
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    .state('about', {
      templateUrl: './views/about.html',
      controller: 'aboutCtrl',
      url: '/about'
    })
    .state('projects', {
      templateUrl: './views/projects.html',
      controller: 'projectsCtrl',
      url: '/projects',
      resolve: {
        projects: function (mainService) {
          return mainService.getProjects().then(function(response){
            return response.data;
          });
        }
      }
    })
    .state('companies', {
      templateUrl: './views/companies.html',
      controller: 'companiesCtrl',
      url: '/companies'
    })
    .state('users', {
      templateUrl: './views/users.html',
      controller: 'usersCtrl',
      url: '/users',
      resolve: {
        users: function (mainService) {
          return mainService.getUsers().then(function(response){
            return response.data;
          });
        }
      }
    })
    .state('profile',{
      templateUrl: './views/profile.html',
      controller: 'userProfileCtrl',
      url: '/user/:id'
      // resolve: {
      //
      //   user: function (mainService, $stateParams) {
      //      mainService.getUserId($stateParams.id)
      //      .then(function(response){
      //        if(response === $stateParams.id){
      //          $state.go(profile);
      //        }
      //      })
      //   }
      // }
    })

});
