define(function(require) {
  'use strict';

  return ['booksModel', function (booksModel) {
    var getTopBooks = function() {
      return booksModel.query({
        limit: 20,
        type: 'top'
      });
    };

    var getLatestBooks = function() {
      return booksModel.query({
        limit: 20,
        type: 'latest'
      });
    };

    return {
      getTopBooks: getTopBooks,
      getLatestBooks: getLatestBooks
    };
  }];
});