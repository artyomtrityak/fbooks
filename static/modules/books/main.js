define(function(require) {
  'use strict';

  var angular = require('angular'),
      Model = require('./services/model'),
      Service = require('./services/service'),

      //Directives
      PopularDirective = require('./directives/popular-directive'),
      RecentDirective = require('./directives/recent-directive'),
      RatioDirective = require('./directives/ratio-directive'),
      bookItemTemplate = require('text!./directives/templates/book-item.html'),

      //Init module
      module = angular.module('books', []);

  //Add templates for ngInclude to $templateCache
  module.run(['$templateCache', function($templateCache){
    $templateCache.put('book-item.html', bookItemTemplate);
  }]);
  
  //Register directives and services
  module.directive('booksPopularDirective', PopularDirective);
  module.directive('booksRecentDirective', RecentDirective);
  module.directive('booksRatioDirective', RatioDirective);
  module.factory('booksModel', Model);
  module.factory('booksService', Service);

  return module;
});