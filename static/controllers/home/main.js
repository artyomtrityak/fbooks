define(function(require) {
  'use strict';

  var MODULE_NAME = 'HomeScreen',
      homeTemplate = require('text!./template.html'),
      module = angular.module(MODULE_NAME, ['ngRoute']);

  module.config(['$routeProvider', function($routeProvider) {
      
      $routeProvider.when('/home', {
        template: homeTemplate,
        controller: 'HomeScreen.home'
      });

      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    }]
  );

  module.controller(MODULE_NAME+'.home', ['$scope', function ($scope) {
    $scope.name = 'Artyom';
  }]);


  return MODULE_NAME;
});