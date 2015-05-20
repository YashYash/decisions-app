app.service('StateService', [
  '$rootScope',
  '$state',
  function(
    $rootScope,
    $state) {
    'use strict'
    console.log('#### State Service');

    var states = {
    	'Current': {
    		'state': $state.current.name
    	},
    	'BackgroundController': {
    		'position': '0',
    		'background': 'http://infinitecomix.com//wp-content/uploads/2014/03/crossroads.jpg' 
    	},
    	'AuthController': {
    		'user': {}
    	},
    	'DecisionsController': {
    	}
    };
    return {
    	state: states
    }

  }
])
