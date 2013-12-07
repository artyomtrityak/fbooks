define(function(require) {
  'use strict';

  return ['$resource', function($resource) {
    return $resource('/books/:id', {
      id: 'id',
      sort: '',
      limit: '10',
      type: ''
    }, {
      update: {method:'PUT'}
    });
  }];
});