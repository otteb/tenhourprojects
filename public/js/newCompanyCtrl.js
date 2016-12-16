angular.module('pproject').controller('newCompanyCtrl', function($scope, mainService, $stateParams, $state){
  $scope.test = 'working';
  $scope.company = {
    companyname: "",
    company_description: "",
    contactfirstname: "",
    contactfirstnamelastname: "",
    contactphone: "",
    contactemail: "",
    contactskypeid: "",
    password: "",
    username: "",
    profilepicurl: "",
    active: 1
  };

  function checkInputs (company) {

    for (var key in company) {
      if (company.hasOwnProperty(company)) {
        if (company[key] == "") {
          return "";
        }
      }
    }
  };

  $scope.postNewCompany = function (company) {

    if(!company.profilepicurl){
      company.profilepicurl = "https://mbevivino.files.wordpress.com/2011/08/silhouette_default.jpg";
    }

    if (checkInputs(company) !== "") {
      mainService.postNewCompany(company).then(function (response) {
        if (!response.data) {
          alert('Unable to create company');
        } else {
          alert("Welcome to 10hourprojects " + company.companyname + '!');
          $state.go('home')
          $scope.newCompany = {};
        };
        $scope.company = {
          companyname: "",
          company_description: "",
          contactfirstname: "",
          contactfirstnamelastname: "",
          contactphone: "",
          contactemail: "",
          contactskypeid: "",
          password: "",
          username: "",
          profilepicurl: "",
          active: 1
        };
      }).catch(function(err) {
        if(err){
            alert('Unable to create company');
        }
        else{
          alert("Welcome to 10hourprojects " + company.companyname + '!');
          $state.go('home');
        };

      });;
    }
  }
});
