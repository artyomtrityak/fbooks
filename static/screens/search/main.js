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
        'ngRoute',
        mainMenuDirective.name,
        searchModule.name,
        booksModule.name
      ]);

  module.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider.when('/search', {
      template: searchTemplate,
      controller: 'searchScreen.Search'
    });
    
  }]);

  module.controller('searchScreen.Search', Controller);


  return module;
});