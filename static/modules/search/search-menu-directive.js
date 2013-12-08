define(function(require) {
  'use strict';

  var template = require('text!./templates/search-menu.html');

  return ['$location', function ($location) {
    return {
        restrict: 'A',
        replace: true,
        template: template,
        scope: {
          showSearch: '='
        },
        link: function(scope, element, attrs, controller) {
          scope.onSearch = function(search) {
            $location.path('/search').search({q: search});
          };
        }
      };
  }];
});