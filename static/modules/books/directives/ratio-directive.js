define(function(require) {
  'use strict';

  var template = require('text!./templates/ratio.html');

  return [function () {
    return {
        restrict: 'A',
        replace: true,
        template: template,
        scope: { 
        },
        link: function(scope, element, attrs, controller) {
          
        }
      };
  }];
});