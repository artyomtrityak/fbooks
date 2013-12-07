define(function(require) {
  'use strict';

  var template = require('text!./templates/template.html');

  return ['searchService',
    function (searchService, $location) {
    return {
        restrict: 'A',
        replace: true,
        template: template,
        scope: {
           searchExample: '=',
           onSearchDone: '&'
        },
        link: function(scope, element, attrs, controller) {
          scope.onSearch = function() {
            scope.onSearchDone({searchInput: scope.searchVal});
          };

          scope.onTypeahead = function(searchVal) {
            var onResponse = searchService.searchBooks(searchVal);
            onResponse.then(function(data) {
              //TODO: show typeahead
            });
          };

          scope.onHelp = function(text) {
            scope.searchVal = text;
          };
        }
      };
  }];
});