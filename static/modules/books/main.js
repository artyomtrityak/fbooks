define(function(require) {
  'use strict';

  var angular = require('angular'),
      Rating = require('modules/rating'),

      //Service
      Model = require('./services/model'),
      Service = require('./services/service'),

      //Directives
      PopularDirective = require('./directives/popular'),
      LatestDirective = require('./directives/latest'),
      bookItemTemplate = require('text!./directives/templates/book-item.html'),

      //Init module
      module = angular.module('books', [Rating.name]);

  //Add needed for ngInclude templates to $templateCache 
  module.run(['$templateCache', function($templateCache){
    $templateCache.put('book-item.html', bookItemTemplate);
  }]);
  
  //Register directives and services
  module.directive('booksPopular', PopularDirective);
  module.directive('booksLatest', LatestDirective);
  module.factory('booksModel', Model);
  module.factory('booksService', Service);

  return module;
});