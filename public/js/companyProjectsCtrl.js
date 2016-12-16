angular.module('pproject').controller('companyProjectsCtrl', function($scope, mainService, $stateParams){
  $scope.currentCompany = $stateParams.id;
  //

  mainService.getCurrentUser().then(function(response){
    $scope.loggInUser = response.data;
  });

  $scope.getCompanyId = function(id)
  {
    mainService.getCompanyId(id).then(function(response){
      console.log('hello from the companyCtrl',response);
      $scope.projects = response;
      //
    })
  }
  $scope.getCompanyId($scope.currentCompany);
  //
  // $scope.getIndUser();

  $scope.project = {
    companyid: $stateParams.id * 1,
    description: '',
    category: '',
    categoryid: null,
    badge_description: '',
    projectname: '',
    active: 1,
  };


  function checkInputs (project) {
    for (var key in project) {
      if (project.hasOwnProperty(key)) {
        if (project[key] == "") {
          return "";
        }
      }
    }
  }

  $scope.postNewProject = function(project){
    if(project.category === "Computer Science"){
      project.categoryid = 1;
    }
    else{
      project.categoryid = 2;
    };
    if(checkInputs(project) !== "") {
      mainService.postNewProject(project).then(function(response){
        $scope.getCompanyId($scope.currentCompany);
      });
    }
  };

  $scope.deactCurrentCompany = function(id){
    alert("Your company profile has been successfully deactivated. We will miss you!");
    mainService.deactCurrentCompany(id.currentCompany);
  };
});
