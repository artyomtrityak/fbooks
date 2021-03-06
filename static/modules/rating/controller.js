define(function(require) {
  'use strict';

  return ['$scope', '$attrs', '$parse', 'ratingConfig',
    function($scope, $attrs, $parse, ratingConfig) {

    this.maxRange = angular.isDefined($attrs.max) ?
      $scope.$parent.$eval($attrs.max) : ratingConfig.max;
    this.stateOn = angular.isDefined($attrs.stateOn) ?
      $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ?
      $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;

    this.createRateObjects = function(states) {
      var defaultOptions = {
        stateOn: this.stateOn,
        stateOff: this.stateOff
      };

      for (var i = 0, n = states.length; i < n; i++) {
        states[i] = angular.extend({ index: i }, defaultOptions, states[i]);
      }
      return states;
    };

    // Get objects used in template
    $scope.range = angular.isDefined($attrs.ratingStates) ?
      this.createRateObjects(
        angular.copy($scope.$parent.$eval($attrs.ratingStates))
      ): this.createRateObjects(new Array(this.maxRange));

    $scope.rate = function(value) {
      //TODO: change this to send request to server
      if ( $scope.readonly || $scope.value === value) {
        return;
      }

      $scope.value = value;
    };

    $scope.enter = function(value) {
      if ( ! $scope.readonly ) {
        $scope.val = value;
      }
      $scope.onHover({value: value});
    };

    $scope.reset = function() {
      $scope.val = angular.copy($scope.value);
      $scope.onLeave();
    };

    $scope.$watch('value', function(value) {
      $scope.val = Math.round(value);
      $scope.realVal = value;
    });

    $scope.$watch('votes', function(votes) {
      $scope.votes = votes;
    });

    $scope.readonly = false;
    if ($attrs.readonly) {
      $scope.$parent.$watch($parse($attrs.readonly), function(value) {
        $scope.readonly = !!value;
      });
    }
  }];

});