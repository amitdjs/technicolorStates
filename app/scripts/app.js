'use strict';

/**
 * @ngdoc overview
 * @name technicolorStatesApp
 * @description
 * # technicolorStatesApp
 *
 * Main module of the application.
 */
angular
  .module('technicolorStatesApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'technicolorStatesApp.services',
    'technicolorStatesApp.directives'
  ])
  .config(function ($routeProvider) {
    /*Using controller as vm approach*/
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs:'login'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('APIPATH', 'localhost:3000')
  .run(function($rootScope, RestService, $location) {
  $rootScope.logout = function () {
    RestService.logOutUser().then(function () {
      $location.path('/login');
      $rootScope.loggedIn = false;
    }, function () {
      console.log('unable to logout');
    })
  }
});
