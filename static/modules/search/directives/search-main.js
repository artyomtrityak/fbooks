define(function(require) {
  'use strict';

  var template = require('text!./templates/search-main.html');

  return ['searchService', '$location', function (searchService, $location) {
    return {
        restrict: 'A',
        replace: true,
        template: template,
        scope: {
           searchExample: '='
        },
        link: function(scope, element, attrs, controller) {
          scope.onSearch = function(search) {
            if (search) {
              $location.path('/search').search({q: search});  
            }
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