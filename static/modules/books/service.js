define(function(require) {
  'use strict';

  return ['booksModel', function (booksModel) {
    var getTopBooks = function() {
      return booksModel.query({
        limit: 20,
        type: 'top'
      });
    };

    return {
      getTopBooks: getTopBooks
    };
  }];
});