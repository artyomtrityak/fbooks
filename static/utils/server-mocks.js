define(function(require) {
  'use strict';

  var books = [
    {
      id: 1,
      name: 'Кардонийская рулетка',
      author: 'Вадим Панов',
      date: 'сентябрь 2012',
      authorId: 1
    },
    {
      id: 2,
      name: 'Заклинатели',
      author: 'Алексей Пехов',
      date: 'ноябрь 2011',
      authorId: 2
    },
    {
      id: 3,
      name: 'Огни небес',
      author: 'Роберт Джордан',
      date: 'апрель 1994',
      authorId: 3
    },
    {
      id: 4,
      name: 'Наложницы Ненависти',
      author: 'Вадим Панов',
      date: 'июнь 2003',
      authorId: 1
    }
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