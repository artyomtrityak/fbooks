define(function(require) {
  'use strict';

  var angular = require('angular'),
      SearchDirective = require('./directives/search-main'),
      SearchMenuDirective = require('./directives/search-menu'),
      Service = require('./services/service'),

      //Init module
      module = angular.module('search', []);

  
  //Register directives and services
  module.directive('searchDirective', SearchDirective);
  module.directive('searchMenuDirective', SearchMenuDirective);
  module.factory('searchService', Service);

  return module;
});