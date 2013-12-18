define(function(require) {
  'use strict';

  var template = require('text!./templates/ratio.html');

  return [function () {
    return {
        restrict: 'E',
        replace: true,
        template: template,
        scope: { 
        },
        link: function(scope, element, attrs, controller) {
          
        }
      };
  }];
});