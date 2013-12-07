define(function(require) {
  'use strict';

  var template = require('text!./templates/recent.html');

  return ['booksService', function (booksService) {
    return {
        restrict: 'A',
        replace: true,
        template: template,
        scope: {
           
        },
        link: function(scope, element, attrs, controller) {
          scope.books = [
            {id: 1, name: 'Book test', author: 'Pehov', date: '12/11/2013'},
            {id: 2, name: 'Book test 2', author: 'Salavadore', date: '12/11/2013'}
          ];
        }
      };
  }];
});