define(function(require) {
  'use strict';

  var angular = require('angular'),

      //Service
      Model = require('./services/model'),
      Service = require('./services/service'),

      //Directives
      PopularDirective = require('./directives/popular'),
      LatestDirective = require('./directives/latest'),
      RatioDirective = require('./directives/ratio'),
      bookItemTemplate = require('text!./directives/templates/book-item.html'),

      //Init module
      module = angular.module('books', []);

  //Add needed for ngInclude templates to $templateCache 
  module.run(['$templateCache', function($templateCache){
    $templateCache.put('book-item.html', bookItemTemplate);
  }]);
  
  //Register directives and services
  module.directive('booksPopularDirective', PopularDirective);
  module.directive('booksLatestDirective', LatestDirective);
  module.directive('booksRatioDirective', RatioDirective);
  module.factory('booksModel', Model);
  module.factory('booksService', Service);

  return module;
});