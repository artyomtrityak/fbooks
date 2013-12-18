define(function(require) {
  'use strict';

  var angular = require('angular'),
      screenTemplate = require('text!./template.html'),
      Controller = require('./controller'),

      // Modules
      searchModule = require('modules/search'),
      booksModule = require('modules/books'),
      menuModule = require('modules/menu'),
      ratingModule = require('modules/rating'),
      
      //Init module
      module = angular.module('homeScreen', [
        menuModule.name,
        searchModule.name,
        booksModule.name,
        ratingModule.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/home', {
      template: screenTemplate,
      controller: 'HomeController'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });
    
  }]);

  module.controller('HomeController', Controller);

  return module;
});