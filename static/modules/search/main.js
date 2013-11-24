define(function(require) {
  'use strict';

  var angular = require('angular'),
      Directive = require('./directive'),
      Service = require('./service'),

      //Init module
      module = angular.module('search', []);

  
  module.directive('searchDirective', Directive);
  module.factory('searchService', Service);

  return module;
});