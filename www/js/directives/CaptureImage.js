app.directive('captureImage', [
  function() {
    'use strict';
    console.log('#### Capture Image');
    return {
      restrict: 'E',
      scope: {
        success: '=',
        option: '='
      },
      link: function(scope, elem, attr) {},
      templateUrl: 'templates/includes/capture-image.html',
      controller: ['$scope', '$timeout', 'Camera', function($scope, $timeout, Camera) {
        $scope.capture = function() {
          if (navigator.camera) {
            Camera.getPicture().then(function(imageURI) {
              $timeout(function() {
                $scope.success($scope.option, imageURI);
              }, 3000);
            });
          } else {
            $scope.success($scope.option, 'http://cdn.designbeep.com/wp-content/uploads/2014/06/1.Mobile-App-Design-Inspiration-%E2%80%93-Peek-Calendar.jpg');
          }
        }
      }]
    }
  }
]);
