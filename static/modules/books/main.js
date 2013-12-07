define(function(require) {
  'use strict';

  var angular = require('angular'),
      PopularDirective = require('./directives/popular-directive'),
      RecentDirective = require('./directives/recent-directive'),
      Model = require('./services/model'),
      Service = require('./services/service'),

      //Init module
      module = angular.module('books', []);

  
  module.directive('booksPopularDirective', PopularDirective);
  module.directive('booksRecentDirective', RecentDirective);
  module.factory('booksModel', Model);
  module.factory('booksService', Service);

  return module;
});