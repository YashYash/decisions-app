app.service('ConstantsService', [
  function() {
    'use strict';

    var isProd = false;
    var fireBaseRootUrl = 'https://life-decisions' + (isProd ? '-prod' : '') + '.firebaseio.com/';
    var fireBaseRootRef = new Firebase(fireBaseRootUrl);
    var fireBaseUsersUrl = fireBaseRootUrl + 'users';
    var fireBaseUsersRef = new Firebase(fireBaseUsersUrl);

    return {
      setProd: function(isProd) {
        this.isProd = isProd;

        fireBaseRootUrl = 'https://life-decisions' + (isProd ? '-prod' : '') + '.firebaseio.com/';
        fireBaseRootRef = new Firebase(fireBaseRootUrl);
      },
      getProd: function() {
        return isProd;
      },
      fireBaseRootUrl: fireBaseRootUrl,
      fireBaseRootRef: fireBaseRootRef,
      fireBaseUsersUrl: fireBaseUsersUrl,
      fireBaseUsersRef: fireBaseUsersRef
    };
  }
]);
