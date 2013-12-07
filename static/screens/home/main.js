define(function(require) {
  'use strict';

  var angular = require('angular'),
      homeTemplate = require('text!./templates/home.html'),
      Controller = require('./controller'),

      // Directives
      mainMenuDirective = require('shared/directives/main-menu'),

      // Modules
      searchModule = require('modules/search'),
      booksModule = require('modules/books'),
      
      //Init module
      module = angular.module('homeScreen', [
        'ngRoute',
        mainMenuDirective.name,
        searchModule.name,
        booksModule.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/home', {
      template: homeTemplate,
      controller: 'homeScreen.HomeController'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });
    
  }]);

  module.controller('homeScreen.HomeController', Controller);

  return module;
});