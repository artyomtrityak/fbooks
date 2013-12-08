define(function(require) {
  'use strict';

  var angular = require('angular'),
      MainMenuDirective = require('./directives/main-menu'),

      searchModule = require('modules/search'),
      
      //Init module
      module = angular.module('menu', [searchModule.name]);

  module.directive('mainMenuDirective', MainMenuDirective);

  return module;
});