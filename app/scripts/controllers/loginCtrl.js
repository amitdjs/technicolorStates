'use strict';

angular.module('technicolorStatesApp')
  .controller('LoginCtrl', function ($cookieStore, RestService, $location, $rootScope) {
    var that = this;
    that.invalid = false;
    that.username = '';
    that.password = '';

    that.hit = function () {
      RestService.loginUser(that.username, that.password).then(function (token) {
        $cookieStore.put('token', token);
        $location.path('/main');
        $rootScope.loggedIn = true;
      }, function () {
        $rootScope.loggedIn = false;
        that.invalid = true;
        that.correctionMessage = 'Invalid User Name or Password'
      })
    };
  });
