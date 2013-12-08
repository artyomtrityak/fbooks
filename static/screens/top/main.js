define(function(require) {
  'use strict';

  var angular = require('angular'),
      screenTemplate = require('text!./template.html'),
      Controller = require('./controller'),

      // Modules
      booksModule = require('modules/books'),
      menuModule = require('modules/menu'),
      
      //Init module
      module = angular.module('topScreen', [
        menuModule.name,
        booksModule.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/books/top', {
      template: screenTemplate,
      controller: 'TopController'
    });
    
  }]);

  module.controller('TopController', Controller);

  return module;
});