requirejs.config({
  baseUrl: 'static/',
  urlArgs: 'bust=' +  Date.now(),
  paths: {
    async: 'assets/js/async-0.2.9',
    bootstrap: 'assets/js/bootstrap-3.0',
    jquery: 'assets/vendor/jquery-1.10.2',
    text: 'assets/js/require-text-2.0.10',
    lodash: 'assets/js/lodash-2.1',
    angular: 'assets/js/angular-1.2.0',
    angularRoute: 'assets/js/angular-route'
  },

  shim: {
    bootstrap: ['jquery'],
    angular: {
      exports: 'angular'
    },
    angularRoute: ['angular'],
    application: ['angularRoute']
  },

  packages: [
    'controllers/home'
  ]
});

requirejs(['application']);
