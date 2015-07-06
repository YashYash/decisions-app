app.controller('DecisionsController', [
  '$scope',
  '$state',
  '$timeout',
  '$ionicSwipeCardDelegate',
  '$stateParams',
  '$ionicSlideBoxDelegate',
  'AuthService',
  function(
    $scope,
    $state,
    $timeout,
    $ionicSwipeCardDelegate,
    $stateParams,
    $ionicSlideBoxDelegate,
    AuthService) {
    'use strict';
    console.log('Decisions Controller Loaded');

    init();

    function init() {
      console.log('#### Init - DecisionsController');
      console.log(AuthService.getUser());
      if(!AuthService.getUser()) {
        AuthService.signOut();
        $timeout(function() {
          $state.go('tab.auth', {'sessionExpired': true});
        }, 1000);
      }
    }

    $timeout(function() {
      $ionicSlideBoxDelegate.$getByHandle('stateSlides').slide(1);
    }, 200);

    $scope.slideHasChanged = function(index) {
      console.log(index);
      if(index === 1) {
        $ionicSlideBoxDelegate.$getByHandle('stateSlides').enableSlide(false);
      } else {
        $ionicSlideBoxDelegate.$getByHandle('stateSlides').enableSlide(true);
      }
    }
  }
]);
