define(function(require) {
  'use strict';

  var angular = require('angular'),
      homeTemplate = require('text!./template.html'),
      Controller = require('./controller'),

      // Directives
      mainMenuDirective = require('shared/directives/main-menu'),

      // Modules
      searchModule = require('modules/search'),
      
      //Init module
      module = angular.module('homeController', [
        'ngRoute',
        mainMenuDirective.name,
        searchModule.name
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