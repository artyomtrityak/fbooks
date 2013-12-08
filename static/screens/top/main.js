define(function(require) {
  'use strict';

  var angular = require('angular'),
      topTemplate = require('text!./templates/top.html'),
      Controller = require('./controller'),

      // Directives
      mainMenuDirective = require('shared/directives/main-menu'),

      // Modules
      booksModule = require('modules/books'),
      
      //Init module
      module = angular.module('topScreen', [
        mainMenuDirective.name,
        booksModule.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/books/top', {
      template: topTemplate,
      controller: 'topScreen.TopController'
    });
    
  }]);

  module.controller('topScreen.TopController', Controller);

  return module;
});