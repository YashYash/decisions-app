app.controller('DashboardController', [
  '$scope',
  'StateService',
  function(
    $scope,
    StateService) {
  	'use strict';
  	console.log('Dashboard Controller Loaded');
  	init();
  	function init() {
  		console.log('#### Init - DashboardController');
  	}
    $scope.getState = function(state) {
      return StateService.state[state];
    };
  }
]);
