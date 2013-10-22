define(function(require) {
  'use strict';

  var angular = require('angular'),
      homeTemplate = require('text!./template.html'),

      //Controller
      Controller = require('./controller'),

      // Directives
      mainMenuDirective = require('directives/main-menu'),
      
      //Init module
      module = angular.module('homeController', [
        'ngRoute',
        mainMenuDirective.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/home', {
      template: homeTemplate,
      controller: 'homeController.Home'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });
    
  }]);

  module.controller('homeController.Home', Controller);


  return module;
});