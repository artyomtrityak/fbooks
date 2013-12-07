define(function(require) {
  'use strict';

  var template = require('text!./templates/ratio.html'),
      app = require('app');

  app.run(['$templateCache', function($templateCache){
    $templateCache.put('books-ratio.html', template);
  }]);
});