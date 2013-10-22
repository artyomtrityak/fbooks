define(function(require) {
  'use strict';

  var angular = require('angular'),
      Directive = require('./directive'),

      //Init module
      module = angular.module('menu.Main', []);

  module.directive('mainMenu', Directive);

  return module;
});