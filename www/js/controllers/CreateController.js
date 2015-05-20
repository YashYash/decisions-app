app.controller('CreateController', [
  '$scope',
  'StateService',
  function(
    $scope,
    StateService) {
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
