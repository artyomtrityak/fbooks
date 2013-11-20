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
            console.log(scope.searchVal);
          };

          scope.onHelp = function(text) {
            scope.searchVal = text;
          };
        }
      };
  };
});