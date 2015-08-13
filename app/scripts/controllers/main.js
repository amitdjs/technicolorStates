'use strict';

/**
 * @ngdoc function
 * @name technicolorStatesApp:MainCtrl
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
    that.abbrMessage = 'Show Abbreviations';

    $rootScope.loggedIn = true;
    /*Check if user is logged in already, if not redirect to login page, if yes then fetch list of states*/
    that.init = function () {
      if(!$rootScope.loggedIn) {
        $location.path('/');
        return;
      }
      RestService.getStates().then(function (data) {
        that.awesomeThings = data;
        that.getDetails ('state1', 0)
      },
      function (data) {
        console.log(data)
      })
    };

    that.getDetails = function (state, index) {
      RestService.getDetails(state).then(function (data) {
        that.details = index + ' ' + data;
      });
    };

    that.getAbbreviations = function () {
      if(that.showAbbr) {
        that.showAbbr = false;
        that.abbrMessage = 'Show Abbreviations'
        return
      }
      RestService.getAbbreviations().then(function (data) {
        that.abbrMessage = 'hide Abbreviations'
        that.showAbbr = true;
        that.abbreviations = data;
      })
    };

    that.init();
  });

