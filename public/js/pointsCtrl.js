angular.module('pproject').controller('pointsCtrl', function($scope, apiService, $stateParams){

  $scope.test = 'working';

// WEATHER SECTION
  apiService.getWeather().then(function(response){
    console.log(response.data);
    $scope.weather = response.data;
    $scope.tempLow = ((response.data.main.temp_min -273.15) * 1.8 + 32).toFixed(1);
    $scope.tempHigh = ((response.data.main.temp_max -273.15) * 1.8 + 32).toFixed(1);
  });

// MOVIE SECTION
  apiService.getMovie().then(function(resp){
    console.log(resp.data);
    $scope.movie = resp.data;
  });

//ZIPCODE SECTION
  apiService.getZip().then(function(resp){
    console.log(resp.data);
    $scope.zip = resp.data;
  })



});
