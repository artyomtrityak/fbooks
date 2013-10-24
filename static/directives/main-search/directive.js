define(function(require) {
  'use strict';

  var template = require('text!./template.html');

  return function () {
    return {
        restrict: 'A',
        replace: true,
        template: template,
        scope: {
           searchExample: '='
        },
        link: function(scope, element, attrs, controller) {
          //var searchVal = '';
          scope.onSearch = function() {
            //console.log(searchVal);
            console.log(scope.searchVal);
          }
        }
      };
  };
});