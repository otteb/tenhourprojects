angular.module('pproject').controller('userProfileCtrl', function($scope, mainService, $stateParams){
  $scope.currentUser = $stateParams.id;
  //
//
// $scope.getUserInfo($scope.currentUser)
 mainService.getCurrentUser().then(function(response) {
  //  console.log(response);
   $scope.loggedInUser = response.data;
 });


  $scope.getUserInfo = function(id){
    // console.log('getUserInfo function', id);
    mainService.getUserInfo(id).then(function (response) {
      // console.log('this is the getUserInfo function',response);
      $scope.userPresent = response.data[0];
      console.log('final response',response.data[0]);
    });
  }($scope.currentUser);



  $scope.getUserId = function(id){
    mainService.getUserId(id).then(function(response){
      console.log("this is the response", response);
      $scope.commendations = response;

    })
  };
  $scope.getUserId($scope.currentUser);

  mainService.getCompProj().then(function(response) {
    // console.log('these are the projects', response.data);

    $scope.projects = response.data;
  });;

  $scope.deleteCurrentUser = function(id){
    alert('Your Profile has been successfully deleted... we will miss you!');
    mainService.deleteCurrentUser(id.currentUser);
  };

  $scope.com = {
    userid: $scope.currentUser,
    commendationtext: "",
    projectid: ""
  };

  $scope.postCom = function(com){

    mainService.postCom(com).then(function(response) {
      $scope.com.commendationtext = "";
      $scope.com.projectid = "";
      $scope.getUserId($scope.currentUser);
    });


  };

  });
