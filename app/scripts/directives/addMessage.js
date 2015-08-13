angular.module('technicolorStatesApp.directives', [])
  .directive('addMessage', function (RestService) {
    return {
      restrict: 'E',
      template: '<div data-ng-repeat="msg in messages"><b>Message</b> : <input type="text" data-ng-model="msg.message"></div>' +
      '<button style="margin:5px" data-ng-click="add()">Add</button>' ,
      scope: false,
      link: function (scope, element, attr) {
        scope.messages = [{
          message: ''
        }];
        scope.add = function () {
          var payLoad = [];
          angular.forEach(scope.messages, function(dt){
            payLoad.push(dt.message)
          });
          RestService.addMessages(payLoad);
          scope.about.init();
          scope.messages = [{
            message: ''
          }];
        };
      }
    }
  });
