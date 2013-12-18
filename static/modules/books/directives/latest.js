define(function(require) {
  'use strict';

  var template = require('text!./templates/latest.html');

  return ['booksService', function (booksService) {
    return {
        restrict: 'E',
        replace: true,
        template: template,
        scope: {
        },
        link: function(scope, element, attrs, controller) {
          scope.books = booksService.getLatestBooks();
        }
      };
  }];
});