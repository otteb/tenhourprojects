angular.module('pproject').controller('usersCtrl', function($scope, mainService, $stateParams, users){
  $scope.test = 'working';
 console.log(users);
  $scope.users = users;
});
