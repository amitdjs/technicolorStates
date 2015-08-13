'use strict';

/**
 * @ngdoc function
 * @name technicolorStatesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the technicolorStatesApp
 */
angular.module('technicolorStatesApp')
  .controller('AboutCtrl', function ($rootScope, RestService) {
    var that = this;
    that.messages = [];
    $rootScope.loggedIn = true;

    that.init = function () {
      if(!$rootScope.loggedIn) {
        $location.path('/');
        return;
      }
      RestService.getMessages().then(function (data) {
          that.messages = data;
        },
        function (data) {
          console.log(data)
        })
    };

    that.init();

  });
