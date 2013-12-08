define(function(require) {
  'use strict';

  var angular = require('angular'),
      topTemplate = require('text!./templates/top.html'),
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
      template: topTemplate,
      controller: 'topScreen.TopController'
    });
    
  }]);

  module.controller('topScreen.TopController', Controller);

  return module;
});