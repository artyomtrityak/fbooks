define(function(require) {
  'use strict';

  return ['$scope', '$location', function ($scope, $location) {
    $scope.searchExample = 'Пехов Крадущийся в тени';

    $scope.onSearchDone = function(searchInput) {
      $location.path('/search').search({q: searchInput});
    };
  }];

});