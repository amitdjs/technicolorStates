'use strict';

/**
 * @ngdoc function
 * @name technicolorStatesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the technicolorStatesApp
 */
angular.module('technicolorStatesApp')
  .controller('MainCtrl', function (RestService, $location, $rootScope) {
    var that = this;

    that.awesomeThings = [];
    that.details = '';
    that.showAbbr = false;

    $rootScope.loggedIn = true
    that.init = function () {
      if(!$rootScope.loggedIn) {
        $location.path('/login');
        return;
      }
      RestService.getStates().then(function (data) {
        console.log(data)
        that.awesomeThings = data;
          that.getDetails ('state1', 0)
      },
      function (data) {
        console.log(data)
      })
    }

    that.getDetails = function (state, index) {
      RestService.getDetails(state).then(function (data) {
        that.details = index + ' ' + data;
      });
    };

    that.getAbbreviations = function () {
      RestService.getAbbreviations().then(function (data) {
        that.showAbbr = true;
        that.abbreviations = data;
      })
    };

    that.init();


  });
