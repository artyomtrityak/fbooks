define(function(require) {
  'use strict';

  var angular = require('angular'),
      Controller = require('./controller'),
      Service = require('./service'),
      Directive = require('./directive'),

      //Init module
      module = angular.module('rating', []);

  module.constant('ratingConfig', {
    max: 5,
    stateOn: null,
    stateOff: null
  });
  
  //Register directives and services
  module.controller('RatingController', Controller);
  module.directive('rating', Directive);
  module.factory('ratingService', Service);

  return module;
});