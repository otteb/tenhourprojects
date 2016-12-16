angular.module('pproject').controller('newUserCtrl', function($scope, mainService, $stateParams, $state){
  $scope.test = 'working';
  $scope.user = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    skypeid: "",
    password: "",
    username: "",
    profilepicurl: ""
  }

  function checkInputs (user) {

    for (var key in user) {
      if (user.hasOwnProperty(key)) {
        if (user[key] == "") {
          return "";
        }
      }
    }
  };

  $scope.postNewUser = function (user) {
    if(!user.profilepicurl){
      user.profilepicurl = "https://mbevivino.files.wordpress.com/2011/08/silhouette_default.jpg";
    };
    if (checkInputs(user) !== "") {
      mainService.postNewUser(user).then(function(response){
        if (!response.data) {
          alert('Unable to create user');
        } else {
          alert('User Created');
          $state.go('home')
          $scope.newUser = {};
        };
      }).catch(function(err) {
        alert('Unable to create user');
      });
    };
  };

});
