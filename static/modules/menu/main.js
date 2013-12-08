define(function(require) {
  'use strict';

  var angular = require('angular'),
      MainMenuDirective = require('./main-menu-directive'),

      searchModule = require('modules/search'),
      
      //Init module
      module = angular.module('menu.Main', [searchModule.name]);

  module.directive('mainMenuDirective', MainMenuDirective);

  return module;
});