define(function(require) {
  'use strict';

  var angular = require('angular'),
      ListDirective = require('./list-directive'),
      Service = require('./service'),

      //Init module
      module = angular.module('books', []);

  
  module.directive('booksListDirective', ListDirective);
  module.factory('booksService', Service);

  return module;
});