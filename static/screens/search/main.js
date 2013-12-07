define(function(require) {
  'use strict';

  var angular = require('angular'),
      searchTemplate = require('text!./templates/search.html'),
      Controller = require('./controller'),

      // Directives
      mainMenuDirective = require('shared/directives/main-menu'),

      // Modules
      searchModule = require('modules/search'),
      booksModule = require('modules/books'),
      
      //Init module
      module = angular.module('searchScreen', [
        mainMenuDirective.name,
        searchModule.name,
        booksModule.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/search', {
      template: searchTemplate,
      controller: 'searchScreen.SearchController'
    });
    
  }]);

  module.controller('searchScreen.SearchController', Controller);

  return module;
});