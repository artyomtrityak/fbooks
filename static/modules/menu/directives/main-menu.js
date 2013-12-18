define(function(require) {
  'use strict';

  var menuTemplate = require('text!./templates/main-menu.html');

  return function () {
    return {
        restrict: 'E',
        replace: true,
        template: menuTemplate,
        scope: {
           activeItem: '@',
           showSearch: '@'
        },
        link: function(scope, element, attrs, controller) {
          scope.isActive = function(url) {
            return scope.activeItem === url;
          };
        }
      };
  };
});