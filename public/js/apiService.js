 angular.module('pproject').service('apiService', function($http, $q) {

    // WEATHER API
    var weatherBaseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=84604,us&appid=";
    var weatherKey = '7a979e74f81415585636bdcd8b9b7ef0';
    this.getWeather = function()
    {
      return $http({
        method: 'GET',
        url: weatherBaseUrl + weatherKey
      })
    };

    //MOVIES api
    var movieBaseUrl = "http://www.omdbapi.com/?t=Invincible&y=&plot=short&r=json";
    this.getMovie = function()
    {
      return $http({
        method: 'GET',
        url: movieBaseUrl
      })
    };

    //ZIPCODE api
    var zipCodeUrl = "http://api.zippopotam.us/us/99019"
    this.getZip = function()
    {
      return $http({
        method: 'GET',
        url: zipCodeUrl
      })
    };

 });
