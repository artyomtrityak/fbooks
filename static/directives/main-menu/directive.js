define(function(require) {
  'use strict';

  var menuTemplate = require('text!./template.html');

  return function () {
    return {
        restrict: 'A',
        replace: true,
        template: menuTemplate,
        scope: {
           activeItem: '@'
        },
        link: function(scope, element, attrs, controller) {
          scope.getMenuClass = function(url) {
            if (scope.activeItem === url) {
              return 'active';
            }
          };
        }
      };
  };
});