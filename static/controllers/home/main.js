define(function(require) {
  'use strict';

  var MODULE_NAME = 'HomeModule',
      angular = require('angular'),
      homeTemplate = require('text!./template.html'),

      //Controller
      Controller = require('./controller'),

      // Directives
      mainMenuDirective = require('directives/main-menu'),
      
      //Init module
      module = angular.module(MODULE_NAME, [
        'ngRoute',
        mainMenuDirective.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/home', {
      template: homeTemplate,
      controller: MODULE_NAME+'.Home'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });
    
  }]);

  module.controller(MODULE_NAME+'.Home', Controller);


  return module;
});