angular.module('pproject').controller('mainCtrl', function($scope,
   mainService, $stateParams, $state, $interval){
  $scope.test = 'working';

  mainService.getCurrentUser().then(function(response) {

    $scope.loggedInUser = response.data;
    console.log($scope.loggedInUser);

    // $interval(function(){
    //   $scope.loggedInUser = response.data;
    //
    // }, 1)
  });



  $scope.logOut = function(){
    mainService.logOut().then(function(){
      mainService.removeLoggedInUser();
      alert('Logout Successful');
      $state.go('home');
    });
  };


});
