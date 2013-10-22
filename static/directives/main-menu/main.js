define(function(require) {
  'use strict';

  var angular = require('angular'),
      MODULE_NAME = 'menu.Main',
      Directive = require('./directive'),

      //Init module
      module = angular.module(MODULE_NAME, []);

  module.directive('mainMenu', Directive);

  return module;
});