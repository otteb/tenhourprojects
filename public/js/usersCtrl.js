angular.module('pproject').controller('usersCtrl', function($scope, mainService, $stateParams, users){
  $scope.test = 'working';

  $scope.users = users;
});
