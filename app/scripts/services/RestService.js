angular.module('technicolorStatesApp.services', [])
  .service('RestService', function ($q, $http, APIPATH) {
    var messages = ['some', 'messages', 'left', 'by', 'users'];
    var users = [
      {name: 'alice', pass: 'password1'},
      {name: 'bob', pass: 'password2'},
      {name: 'charlie', pass: 'password3'},
      {name: 'dan', pass: 'password4'}
    ];
    return {

      /*Commented out $http methods, mocking results for demo*/

      loginUser: function (username, password) {
        var deferred = $q.defer();
        var user = _.find(users, function (dt) {
          return dt.name == username && dt.pass == password
        });
        if(user) {
          deferred.resolve('authenticated');
        }
        else {
          deferred.reject('Invalid')
        }
        return deferred.promise;

        /*return $http({
          url: APIPATH + '/login',
          method: "POST",
          headers: {'Authorization': false, 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin':'*'},
          data: {login: username, password: password}
        });*/
      },
      logOutUser: function () {
        var deferred = $q.defer();
        deferred.resolve(true);
        return deferred.promise;

        /*return $http({
          url: APIPATH + '/logout',
          method: "GET"
        });*/
      },
      getStates: function () {
        var deferred = $q.defer();
        deferred.resolve(['state1', 'state2', 'state3', 'state4', 'state5']);
        return deferred.promise;

        /*return $http({
          url: APIPATH + '/states',
          method: "GET"
        });*/
      },
      getDetails: function (id) {
        var deferred = $q.defer();
        deferred.resolve('Its a state. Really.');
        return deferred.promise;

      /*  var url = (APIPATH + '/states/:id').replace(/:id/g, id);
        return $http({
          url: url,
          method: "GET"
        });*/
      },
      getAbbreviations: function () {
        var deferred = $q.defer();
        deferred.resolve([{full: 'state1', short: 's1'},
          {full: 'state2', short: 's2'},
          {full: 'state3', short: 's3'},
          {full: 'state4', short: 's4'},
          {full: 'state5', short: 's5'}
        ]);
        return deferred.promise;

        /*return $http({
         url: APIPATH + '/states/abbreviations',
         method: "GET"
         });*/
      },
      getMessages: function () {
        var deferred = $q.defer();
        deferred.resolve(messages);
        return deferred.promise;
      },
      addMessages: function (message) {
        angular.forEach(message, function (msg) {
          messages.push(msg)
        });
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;
      }

    }
  });
