'use strict';

angular.module('wikicatwkApp')
  .directive('summary', function () {
    return {
      template: '<div class="summary">{{Main.stSummary}}</div>',
      restrict: 'E',
      controller: function ($scope,main) {
      	$scope.Main = main;
      }
    };
  });
