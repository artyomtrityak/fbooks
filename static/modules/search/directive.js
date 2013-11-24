define(function(require) {
  'use strict';

  var template = require('text!./template.html');

  return function (searchService) {
    return {
        restrict: 'A',
        replace: true,
        template: template,
        scope: {
           searchExample: '='
        },
        link: function(scope, element, attrs, controller) {
          scope.onSearch = function() {
            var onResponse = searchService.searchBooks(scope.searchVal);
            onResponse.then(function(data) {
              console.log('search done', data);
            });
          };

          scope.onHelp = function(text) {
            scope.searchVal = text;
          };
        }
      };
  };
});