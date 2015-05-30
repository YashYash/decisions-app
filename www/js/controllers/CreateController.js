app.controller('CreateController', [
  '$scope',
  '$ionicSlideBoxDelegate',
  '$timeout',
  'StateService',
  'AuthService',
  function(
    $scope,
    $ionicSlideBoxDelegate,
    $timeout,
    StateService,
    AuthService) {
    'use strict';
    console.log('Create Controller Loaded');
    init();


    function init() {
      console.log('#### Init - CreateController');
    }
    $scope.getState = function(state) {
      return StateService.state[state];
    };

  }
]);
