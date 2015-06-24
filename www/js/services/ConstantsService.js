app.service('ConstantsService', [
  function() {
    'use strict';

    var isProd = false;
    var fireBaseRootUrl = 'https://life-decisions' + (isProd ? '-prod' : '') + '.firebaseio.com/';
    var fireBaseRootRef = new Firebase(fireBaseRootUrl);
    var fireBaseUsersUrl = fireBaseRootUrl + 'users';
    var fireBaseUsersRef = new Firebase(fireBaseUsersUrl);

    return {
      fireBaseRootUrl: fireBaseRootUrl,
      fireBaseRootRef: fireBaseRootRef,
      fireBaseUsersUrl: fireBaseUsersUrl,
      fireBaseUsersRef: fireBaseUsersRef,
      durationPicker: {
        numbers: function(type) {
          var numbers = [];
          for (var i = 0; i <= 25; i++) {
            numbers.push({
              number: i + 1
            });
          }
          return numbers;
        },
        types: function() {
          var types = [{
            "name": "MINUTES"
          }, {
            "name": "HOURS"
          }, {
            "name": "DAYS"
          }];
          return types;
        }
      },
    };
  }
]);
