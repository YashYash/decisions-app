app.run(function($ionicPlatform, $rootScope, $timeout, $state, StateService) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    	$timeout(function() {
    		StateService.state['Current']['state'] = $state.current.name;
    	}, 200);
    });    
  });
})