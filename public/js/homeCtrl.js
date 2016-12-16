angular.module('pproject').controller('homeCtrl', function($scope, mainService, $stateParams, $state){
  $scope.test = 'working';
  $scope.login = function(user) {
    mainService.login(user).then(function(response) {
      // console.log(response.data);
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        if(response.data.companyid === null)
        {
            $state.go('users');
        }
        else {
          $state.go('companies');
        }

      }
    }).catch(function(err) {
      if(err.data === null){
        alert('Welcome, you\'ve successfully logged in.');
      }
      else {
        alert('Login unsuccessful, please try again')
      }

    });
  };
});
