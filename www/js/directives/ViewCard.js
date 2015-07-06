app.directive('viewCard', [
  function() {
    'use strict';
    console.log('#### View Card Directive')
    return {
      restrict: 'E',
      link: function(scope, elem, attr) {},
      templateUrl: 'templates/includes/view-card.html',
      controller: ['$scope', '$timeout', function($scope, $timeout) {
        console.log('#### View Card Directive');
        // Ui-responders
        $scope.dragDownA = function() {
          $scope.transitionA = false;
          $scope.addIndexA = true;
          if ($scope.heightA < 230) {
            $timeout(function() {
              $scope.heightA = $scope.heightA + 15;
            }, 50);
          }
        };
        $scope.dragUpA = function() {
          if ($scope.heightA > 0) {
            $scope.heightA = $scope.heightA - 15;
          }
        };
        $scope.releaseA = function() {
          $scope.transitionA = true;
          $timeout(function() {
            $scope.heightA = 0;
            $timeout(function() {
              $scope.addIndexA = false;
            }, 300);
          }, 50);
        };
        $scope.dragDownB = function() {
          if ($scope.heightB > 0) {
            $scope.heightB = $scope.heightB - 15;
          }
        };
        $scope.dragUpB = function() {
          $scope.transitionB = false;
          if ($scope.heightB < 230) {
            $scope.heightB = $scope.heightB + 15;
          }
        };
        $scope.releaseB = function() {
          $scope.transitionB = true;
          $timeout(function() {
            $scope.heightB = 0;
          }, 50);
        };
      }]
    }
  }
]);
