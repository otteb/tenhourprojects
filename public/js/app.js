angular.module('pproject', ['ui.router']).config(function($urlRouterProvider, $stateProvider)
{
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    .state('newUser', {
      templateUrl: './views/new_user.html',
      controller: 'newUserCtrl',
      url: '/user'
    })
    .state('newCompany', {
      templateUrl: './views/new_company.html',
      controller: 'newCompanyCtrl',
      url: '/company'
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
      url: '/companies',
      resolve: {
        companies: function (mainService) {
          return mainService.getCompanies().then(function(response){
            return response.data;
          })
        }
      }
    })
    .state('users', {
      templateUrl: './views/users.html',
      controller: 'usersCtrl',
      url: '/users',
      resolve: {
        users: function (mainService) {
          return mainService.getUsers().then(function(response){
            var res = response.data;
            var viewArray = [];
            for(var i = 0; i < res.length; i++)
            {
              if(res[i].companyid === null){
                viewArray.push(res[i]);
              }
            }
            return viewArray;
          });
        }
      }
    })
    .state('profile',{
      templateUrl: './views/profile.html',
      controller: 'userProfileCtrl',
      url: '/user/:id'
      //this resolve will not all the current user to see the page unless they are logged in - in otherwords, this screens out guests
      // resolve: {
			// 	user: function(mainService, $state) {
			// 		return mainService.getCurrentUser()
			// 			.then(function(response) {
			// 				if (!response.data)
			// 					$state.go('home');
			// 				return response.data;
			// 			})
			// 			.catch(function(err) {
			// 				$state.go('home');
			// 			});
			// 	}
			// }
    })
    .state('company_projects', {
      templateUrl: './views/comp_proj.html',
      controller: 'companyProjectsCtrl',
      url: '/company/projects/:id'
    })
    .state('points_page', {
      templateUrl: './views/points_page.html',
      controller: 'pointsCtrl',
      url: '/points_page'
    })
});
