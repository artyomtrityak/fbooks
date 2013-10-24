define(function(require) {
  'use strict';

  var angular = require('angular'),
      Directive = require('./directive'),

      //Init module
      module = angular.module('search.Main', []);

  module.directive('mainSearch', Directive);

  return module;
});