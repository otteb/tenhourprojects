angular.module('pproject').controller('companiesCtrl', function($scope, mainService, $stateParams, companies){
  $scope.test = 'working';

  $scope.companies = companies;
  console.log(companies);
});
