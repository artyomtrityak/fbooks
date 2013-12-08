define(function(require) {
  'use strict';

  var angular = require('angular'),
      Directive = require('./directive'),

      searchModule = require('modules/search'),
      //Init module

      module = angular.module('menu.Main', [searchModule.name]);

  module.directive('mainMenuDirective', Directive);

  return module;
});