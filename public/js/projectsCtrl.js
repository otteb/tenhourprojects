angular.module('pproject').controller('projectsCtrl', function($scope, mainService, $stateParams, projects){
  $scope.test = 'working';

  $scope.projects = projects;
  console.log(projects);
});
