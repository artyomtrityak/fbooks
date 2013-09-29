requirejs.config({
  baseUrl: 'static/',
  //urlArgs: 'bust=' +  Date.now()

  paths: {
    async: 'assets/js/async-0.2.9',
    bootstrap: 'assets/js/bootstrap-3.0',
    jquery: 'assets/vendor/jquery-1.10.2',
    text: 'assets/js/require-text-2.0.10',
    lodash: 'assets/js/lodash-2.1'
  },

  shim: {
    bootstrap: ['jquery']
  },

  packages: [
    
  ]
});

console.log('ready');
