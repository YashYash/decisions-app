app.service('AuthService', [
  '$http',
  '$firebaseAuth',
  '$rootScope',
  '$firebase',
  '$timeout',
  'ConstantsService',
  function(
    $http,
    $firebaseAuth,
    $rootScope,
    $firebase,
    $timeout,
    ConstantsService) {
    'use strict';
    console.log('#### Auth Service');

    // init

    var ref = ConstantsService.fireBaseRootRef;
    var auth = $firebaseAuth(ref);
    var authUser = $firebase(ConstantsService.fireBaseUsersRef);
    console.log(auth);
    return {
      signUp: function(user) {
        var email = user.email;
        var password = user.password;
        // creates user
        console.log("#### Creating the user ...");
        auth.$createUser({
          email: email,
          password: password
        }).then(function(userData) {
          console.log("#### User created successfully");
          console.log('##### Logging in user ...');

          // logs in user
          auth.$authWithPassword({
            email: user.email,
            password: user.password
          }).then(function(authenticated) {
            console.log("#### User authenticated and logged in");
            console.log('#### Creating user object in /users/ ...');
            var key = authenticated.uid;
            var newUser = {
              username: user.username,
              email: user.email,
              profilePic: '',
              thumbnailPic: '',
              created: new Date()
            };
            // adds additional fields to user
            authUser.$set(key, newUser).then(function(createdUser) {
              console.log('#### Created user object');
              $rootScope.$broadcast('user registered');
            }, function(err) {
              console.log('#### Error while creating the user object');
              console.log(err);
            });
          }, function(err) {
            console.log('#### Error while logging in the new user');
            console.log(err);
          });
        }, function(err) {
          console.log('#### Error while calling $createUser');
          console.log(err);
          if (err.code === 'EMAIL_TAKEN') {
            console.log('#### This email is already in use');
            $rootScope.$broadcast('email taken');
          }
          if (err.code === 'INVALID_EMAIL') {
            console.log('#### No account with this email');
            $rootScope.$broadcast('invalid email');
          }
        });
      },

      signIn: function(user) {
        console.log('#### User is being authenticated...');
        auth.$authWithPassword({
          email: user.email,
          password: user.password
        }).then(function(authenticated) {
          console.log('#### User has been authenticated');
          $rootScope.$broadcast('user authenticated');
        }, function(err) {
          if (err) {
            console.log('#### Error occured while logging in');
            console.log(err);
            if (err.message === 'Firebase.authWithPassword failed: First argument must contain the key "email" with type "string"') {
              $rootScope.$broadcast('invalid email');
            }
            if (err.message === 'Firebase.authWithPassword failed: First argument must contain the key "password" with type "string"') {
              $rootScope.$broadcast('invalid password');
            }
            if (err.code === 'INVALID_PASSWORD') {
              console.log('#### Incorrect password');
              $rootScope.$broadcast('invalid password');
            }
            if (err.code === 'INVALID_USER') {
              console.log('#### No account with this email');
              $rootScope.$broadcast('invalid user');
            }
            if (err.code === 'INVALID_EMAIL') {
              console.log('#### No account with this email');
              $rootScope.$broadcast('invalid email');
            }
          }
        });
      },
      createProfile: function(profile, type) {
        var authData = auth.$getAuth();
        console.log(authData.auth.uid);
        var currentUserUrl = ConstantsService.fireBaseRootUrl + 'users' + '/' + authData.auth.uid + '/profile';
        var currentUserRef = new Firebase(currentUserUrl);
        var currentUser = $firebase(currentUserRef);
        var createProfile;
        if (type === 'organization') {
          createProfile = {
            organizationName: profile.organization,
            type: type
          }
        } else {
          createProfile = {
            firstName: profile.name.first,
            lastName: profile.name.last,
            type: type
          }
        }
        console.log('#### Creating the profile ...');
        currentUser.$update(createProfile).then(function(response) {
          console.log('#### Created the profile');
          console.log(response);
        });
      },
      signOut: function() {
        auth.$unauth();
        $timeout(function() {
          $rootScope.$broadcast('logged out');
        }, 5000);
      },
      getUser: function() {
        var authData = auth.$getAuth();
        if (authData) {
          return authData;
        } else {
          return false;
        }
      }
    }
  }
]);
