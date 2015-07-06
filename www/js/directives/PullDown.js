app.directive('viewCard', [
  function() {
    'use strict';
    return {
      restrict: 'EAC',
      link: function(scope, elem, attr) {
        console.log('#### View Card Directive')
        $ionicGesture.on('dragDown', function(event) {

          console.log('Got swiped!');
          event.preventDefault();
          window.history.back();

        }, elem);

      }
    }
  }
]);
