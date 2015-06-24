app.controller('CreateController', [
  '$scope',
  '$ionicSlideBoxDelegate',
  '$timeout',
  '$ionicScrollDelegate',
  'StateService',
  'AuthService',
  'ConstantsService',
  function(
    $scope,
    $ionicSlideBoxDelegate,
    $timeout,
    $ionicScrollDelegate,
    StateService,
    AuthService,
    ConstantsService) {
    'use strict';
    console.log('Create Controller Loaded');


    init();

    function init() {
      console.log('#### Init - CreateController');
      $scope.card = {};
      $scope.card.duration = {};
      $scope.card.duration.number = 10;
      $scope.card.duration.type = 'MINUTES';
      $scope.slideUpBanner = false;
      $scope.step = 1;
      $scope.dayNumbers = ConstantsService.durationPicker.numbers('days');
      $scope.numbers = $scope.dayNumbers;
      $scope.types = ConstantsService.durationPicker.types();
    }

    // Ui-responders
    $scope.getState = function(state) {
      return StateService.state[state];
    };
    $scope.nextStep = function() {
      if($scope.step < 4) {
        $scope.step++;
      }
    };
    $scope.prevStep = function() {
      if($scope.step > 1) {
        $scope.step--;
      }
    };    
    $scope.inputsFocused = function() {
      $scope.slideUpBanner = true;
    };
    $scope.inputsBlurred = function() {
      $scope.slideUpBanner = false;
    };
    $scope.setDuration = function(duration) {
      $scope.card.duration.quick = duration;
    };
    $scope.toggleDurationOverlay = function() {
      $scope.showDurationOverlay = !$scope.showDurationOverlay;
      if($scope.showDurationOverlay) {
        $timeout(function() {
          $scope.animateOverlay = true;
        }, 200);
      } else {
        $scope.animateOverlay = false;
      }
    };

    $scope.scrollingNumbers = function() {
      var position = $ionicScrollDelegate.$getByHandle('number-scroll').getScrollPosition();
      if(position.top < 0) {
        $scope.card.duration.number = 0;
      } else if (position.top > 360) {
        $scope.card.duration.number = 360;
      } else {
        $scope.card.duration.number = Math.floor(position.top);
      }
      if(!$scope.$$phase) {
        $scope.$apply();
      }
    };
    $scope.incrementDuration = function() {
      if($scope.card.duration.number < 360) {
        $scope.card.duration.number++;
      }
      $scope.materialTopShadow = true;
      $timeout(function() {
        $scope.materialTopShadow = false;
      }, 100);
    };

    $scope.decreaseDuration = function() {
      if($scope.card.duration.number > 0) {
        $scope.card.duration.number--;
      }
      $scope.materialBottomShadow = true;
      $timeout(function() {
        $scope.materialBottomShadow = false;
      }, 100);      
    };

    $scope.setDurationType = function(type) {
      $scope.card.duration.type = type;
    };    
  }
]);
