define(function(require) {
  'use strict';

  var angular = require('angular'),
      serverMocks = require('shared/server-mocks'),
      app = angular.module('AppMain', ['ngResource']);

  app.config(['$locationProvider', '$provide',
    function($locationProvider, $provide) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
    
    //TODO: make from config variable
    $provide.decorator('$httpBackend', createHttpBackendMock); 

  }]);

  app.run(serverMocks);

  return app;
});