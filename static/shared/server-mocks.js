define(function(require) {
  'use strict';

  var books = [
    {id: 1, name: 'Book test', author: 'Pehov'},
    {id: 2, name: 'Book test 2', author: 'Salavadore'}
  ];

  var regexpUrl = function(regexp) {
    return {
      test: function(url) {
        this.matches = url.match(regexp);
        return this.matches && this.matches.length > 0;
      }
    };
  };

  return ['$httpBackend', '$timeout', function($httpBackend, $timeout) {
    $httpBackend.when('GET', regexpUrl('\/books(.+)')).respond(books);

    var flushBackend = function() {
      try {
        $httpBackend.flush();
      } catch (err) {
        // ignore that there's nothing to flush
      }
      $timeout(flushBackend, 500);
    };
    $timeout(flushBackend, 500);
  }];

});