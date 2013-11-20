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
          scope.isActive = function(url) {
            return scope.activeItem === url;
          };
        }
      };
  };
});