define(function(require) {
  'use strict';

  var angular = require('angular'),
      app = angular.module('AppMain', []);

  app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
  }]);                       

  return app;
});