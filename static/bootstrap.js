define(function(require) {
  'use strict';

  var angular = require('angular'),
      app = require('app'),

      // Screens
      HomeScreen = require('screens/home'),
      TopScreen = require('screens/top'),
      SearchScreen = require('screens/search');

  angular.bootstrap(document, [
    'ngRoute',
    app.name,
    HomeScreen.name,
    SearchScreen.name,
    TopScreen.name
  ]);
});