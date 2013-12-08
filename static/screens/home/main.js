define(function(require) {
  'use strict';

  var angular = require('angular'),
      homeTemplate = require('text!./templates/home.html'),
      Controller = require('./controller'),

      // Modules
      searchModule = require('modules/search'),
      booksModule = require('modules/books'),
      menuModule = require('modules/menu'),
      
      //Init module
      module = angular.module('homeScreen', [
        menuModule.name,
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