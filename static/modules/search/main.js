define(function(require) {
  'use strict';

  var angular = require('angular'),
      SearchDirective = require('./search-directive'),
      SearchMenuDirective = require('./search-menu-directive'),
      Service = require('./service'),

      //Init module
      module = angular.module('search', []);

  
  //Register directives and services
  module.directive('searchDirective', SearchDirective);
  module.directive('searchMenuDirective', SearchMenuDirective);
  module.factory('searchService', Service);

  return module;
});