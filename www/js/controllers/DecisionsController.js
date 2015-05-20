app.controller('DecisionsController', [
  '$scope',
  '$state',
  '$ionicSwipeCardDelegate',
  '$stateParams',
  function(
    $scope,
    $state,
    $ionicSwipeCardDelegate,
    $stateParams) {
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
