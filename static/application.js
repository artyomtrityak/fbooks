define(function(require) {
  'use strict';

  var angular = require('angular'),
      // Screens
      HomeController = require('controllers/home'),

      app = angular.module('Application', [
        'ngRoute',
        HomeController
      ]);

  app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
  }]);                       

  angular.bootstrap(document, ['Application']);
});