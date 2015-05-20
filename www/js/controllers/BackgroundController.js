app.controller('BackgroundController', [
  '$scope',
  'StateService',
  function(
    $scope,
    StateService) {
  	'use strict';
  	console.log('Background Controller Loaded');
  	init();
  	function init() {
  		console.log('#### Init - BackgroundController');
  	}
    $scope.getState = function(state) {
      return StateService.state[state];
    };
  }
]);
