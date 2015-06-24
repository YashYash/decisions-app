app.controller('DecisionsController', [
  '$scope',
  '$state',
  '$ionicSwipeCardDelegate',
  '$stateParams',
  'AuthService',
  function(
    $scope,
    $state,
    $ionicSwipeCardDelegate,
    $stateParams,
    AuthService) {
    'use strict';
    console.log('Decisions Controller Loaded');

    init();

    function init() {
      console.log('#### Init - DecisionsController');
      console.log('#### State Params');
      console.log($stateParams);
    }
  }
]);
