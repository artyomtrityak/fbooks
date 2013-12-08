define(function(require) {
  'use strict';

  return ['$http', function ($http) {
    var searchBooks = function(search) {
      var onResponse = $http({
          url: '/books', 
          method: "GET",
          params: {q: search, limit: 10}
       });

      onResponse.catch(function() {
        // TODO: throw event to show global error
        console.log('error', arguments);
      });

      return onResponse;
    };

    return {
      searchBooks: searchBooks
    };
  }];
});