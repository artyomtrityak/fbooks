define(function(require) {
  'use strict';

  var angular = require('angular'),
      screenTemplate = require('text!./template.html'),
      Controller = require('./controller'),

      // Modules
      searchModule = require('modules/search'),
      booksModule = require('modules/books'),
      menuModule = require('modules/menu'),
      
      //Init module
      module = angular.module('searchScreen', [
        menuModule.name,
        searchModule.name,
        booksModule.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/search', {
      template: screenTemplate,
      controller: 'SearchController'
    });
    
  }]);

  module.controller('SearchController', Controller);

  return module;
});