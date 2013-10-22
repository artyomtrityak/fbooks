define(function(require) {
  'use strict';

  var angular = require('angular'),
      app = require('app'),

      // Screens
      HomeController = require('controllers/home');

  angular.bootstrap(document, [
    app.name,
    HomeController.name
  ]);
});