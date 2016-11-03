angular.module('pproject').controller('userProfileCtrl', function($scope, mainService, $stateParams){
  $scope.currentUser = $stateParams.id;
  console.log($scope.currentUser);
  $scope.getUserId = function(o)
  {
    mainService.getUserId(o).then(function(response){
      $scope.found = response;
      console.log($scope.found);
    })
  }
  $scope.getUserId($scope.currentUser);
  console.log($scope.getUserId($scope.currentUser));
  // $scope.getIndUser();
});
