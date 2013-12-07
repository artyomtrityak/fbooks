define(function(require) {
  'use strict';

  var angular = require('angular'),
      PopularDirective = require('./popular-directive'),
      RecentDirective = require('./recent-directive'),
      Model = require('./model'),
      Service = require('./service'),

      //Init module
      module = angular.module('books', []);

  
  module.directive('booksPopularDirective', PopularDirective);
  module.directive('booksRecentDirective', RecentDirective);
  module.factory('booksModel', Model);
  module.factory('booksService', Service);

  return module;
});