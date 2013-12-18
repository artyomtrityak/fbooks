define(function(require) {
  'use strict';

  var template = require('text!./templates/rating.html');

  return function() {
    return {
      restrict: 'EA',
      scope: {
        value: '=',
        onHover: '&',
        onLeave: '&'
      },
      controller: 'RatingController',
      template: template,
      replace: true
    };
  };
});