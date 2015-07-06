app.directive('contactSlideable', [
  function() {
    'use strict';
    console.log('#### Contact slideable Directive')
    return {
      restrict: 'E',
      scope: {
        contact: '='
      },
      templateUrl: 'templates/includes/contact-slideable.html',
      link: function(scope, elem, attr) {

      },
      controller: ['$scope', '$timeout', function($scope, $timeout) {
        console.log('#### Card Slideable Controller');
        $scope.slideLeft = 0;
        $scope.contactDraggedLeft = function() {
          if ($scope.slideLeft > -120) {
            $scope.slideLeft = $scope.slideLeft - 15;
          }
        };
        $scope.contactDraggedRight = function() {
          if ($scope.slideLeft < 15) {
            $scope.slideLeft = $scope.slideLeft + 15;
          }
        };
        $scope.released = function() {
          $scope.addTransition = true;

          $timeout(function() {
            if ($scope.slideLeft < -80) {
              $scope.slideLeft = -60;
            }
            if ($scope.slideLeft > -40) {
              $scope.slideLeft = 0;
            }
            $timeout(function() {
              $scope.addTransition = false;
            }, 200);
          }, 20);
        };
      }]
    }
  }
]);
