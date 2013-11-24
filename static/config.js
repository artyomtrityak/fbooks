requirejs.config({
  baseUrl: 'static/',
  urlArgs: 'bust=' +  Date.now(),
  paths: {
    async: 'assets/js/async-0.2.9',
    twbootstrap: 'assets/js/bootstrap-3.0',
    jquery: 'assets/js/jquery-1.10.2',
    text: 'assets/js/require-text-2.0.10',
    lodash: 'assets/js/lodash-2.1',
    angular: 'assets/js/angular-1.2.2',
    angularRoute: 'assets/js/angular-route',
    angularMock: 'assets/js/angular-mock',
    angularResource: 'assets/js/angular-resource'
  },

  config: {
    app: {
      serverMocks: true
    }
  },

  shim: {
    twbootstrap: ['jquery'],
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularRoute: ['angular'],
    angularMock: ['angular'],
    angularResource: ['angular'],
    bootstrap: ['angularRoute', 'angularMock', 'angularResource']
  },

  packages: [
    // Screens
    'screens/home',
    'screens/search',

    //Directives
    'shared/directives/main-menu',

    //Modules
    'modules/search',
    'modules/books'
  ],

  deps: ['app']
});

requirejs(['bootstrap']);
