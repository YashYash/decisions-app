app.run(function($ionicPlatform, $rootScope, $timeout, $state, $cordovaContacts, StateService, ConstantsService) {

  $ionicPlatform.ready(function() {
    console.log('#### Platform is ready');
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      console.log('#### Plugins are ready');
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      console.log('#### Statusbar is ready');
      StatusBar.styleLightContent();
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log('#### State has changed');
      $timeout(function() {
        StateService.state['Current']['state'] = $state.current.name;
      }, 200);
    });

    // Get the contacts
    if(navigator.contacts) {
      getContacts();
    } 

    function getContacts() {
      console.log('#### Getting the contacts');

      var userContacts = [];
      function onSuccess(contacts) {
        console.log('#### Got the contacts');
        for (var i = 0; i < contacts.length; i++) {
          var contact = contacts[i];
          userContacts.push(contact);
        }
        StateService.state['User'].contacts = userContacts;
        // StateService.state['User'].contacts = ConstantsService.devContacts();
      };

      function onError(err) {
        console.log(err);;
      };

      var options = {};
      options.multiple = true;
      if (navigator.contacts) {
        $cordovaContacts.find(options).then(onSuccess, onError);
      } else {
        StateService.state['User'].contacts = ConstantsService.devContacts();
      }
    }
  });
})
