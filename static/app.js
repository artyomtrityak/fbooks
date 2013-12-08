define(function(require, exports, module) {
  'use strict';

  var angular = require('angular'),
      serverMocks = require('shared/server-mocks'),
      app = angular.module('AppMain', ['ngResource', 'ngRoute']),
      config = module.config() || {};

  app.config(['$locationProvider', '$provide',
    function($locationProvider, $provide) {

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);

    if (config.serverMocks) {
      $provide.decorator('$httpBackend', createHttpBackendMock); 
    }
  }]);

  if (config.serverMocks) {
    app.run(serverMocks);
  }

  return app;
});