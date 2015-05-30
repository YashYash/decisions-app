app.controller('AuthController', [
  '$scope',
  '$rootScope',
  '$ionicSlideBoxDelegate',
  '$timeout',
  '$state',
  'StateService',
  'AuthService',
  function(
    $scope,
    $rootScope,
    $ionicSlideBoxDelegate,
    $timeout,
    $state,
    StateService,
    AuthService) {
    'use strict';
    console.log('Auth Controller Loaded');

    init();

    function init() {
      console.log('#### Init - AuthController');
      $scope.loginErrors = [];
      $scope.loadingAuth = false;
      $scope.auth = {};
      $scope.profile = {};
      $scope.selectedTab = 'personal';
      $scope.slides = [
        "templates/includes/login.html",
        "templates/includes/register.html",
      ];
      AuthService.signOut();
      $timeout(function() {
        console.log(AuthService.getUser());
      }, 3000);
      if(AuthService.getUser()) {
        // $state.go('tab.decisions');
      }
    }
    $scope.go = function(where) {
      if (where === 'in') {
        $ionicSlideBoxDelegate.slide(0);
      } else {
        $ionicSlideBoxDelegate.slide(1);
      }
    };
    $scope.goToDecisions = function() {
      $state.go('tab.decisions');
    };
    $scope.selectTab = function(tab) {
      $scope.selectedTab = tab;
    };
    $scope.slideHasChanged = function(index) {
      StateService.state['BackgroundController']['position'] = index.toString();
    };
    $scope.checkLoginErrors = function() {
      $scope.loginError = '';
      if (!$scope.auth.email) {
        $scope.loginError = 'email';
      } else if (!$scope.auth.password) {
        $scope.loginError = 'password';
      }
    };
    $scope.signIn = function() {
      $scope.slides = ["templates/includes/login.html"];
      $scope.loadingAuth = true;
      $scope.checkLoginErrors();
      $timeout(function() {
        if (!$scope.loginError) {
          console.log('#### No login errors');
          AuthService.signIn($scope.auth);
        } else {
          if ($scope.loginError === 'email') {
            console.log('#### Email error');
          }
          if ($scope.loginError === 'password') {
            console.log('#### Password Error');
          }
          $scope.loadingAuth = false;
          $scope.slides = [
            "templates/includes/login.html",
            "templates/includes/register.html"
          ];
          $ionicSlideBoxDelegate.update()
        }
      }, 1200);
    };
    $scope.checkSignUpErrors = function() {
      $scope.signUpError = '';
      if (!$scope.auth.username) {
        $scope.signUpError = 'username';
      } else if (!$scope.auth.email) {
        $scope.signUpError = 'email';
      } else if (!$scope.auth.password) {
        $scope.signUpError = 'password';
      }
    };
    $scope.signUp = function() {
      $scope.loadingAuth = true;
      $scope.checkSignUpErrors();
      $timeout(function() {
        if (!$scope.signUpError) {
          console.log('#### No login errors');
          AuthService.signUp($scope.auth);
        } else {
          if ($scope.signUpError === 'username') {
            console.log('Username error');
          }
          if ($scope.signUpError === 'email') {
            console.log('#### Email error');
          }
          if ($scope.signUpError === 'password') {
            console.log('#### Password Error');
          }
          $scope.loadingAuth = false;
        }
      }, 1200);
    };
    $scope.authErrors = function(type) {
      if (type === 'invalid email') {
        console.log('#### Invalid email');
      }
      if (type === 'email taken') {
        console.log('#### Email taken');
      }
      if (type === 'invalid password') {
        console.log('#### Invalid password');
      }
      if (type === 'invalid user') {
        console.log('#### Invalid user');
      }
      $scope.loginError = 'email';
      $scope.signUpError = 'email';
      $scope.loadingAuth = false;
      $scope.slides = [
        "templates/includes/login.html",
        "templates/includes/register.html"
      ];
      $ionicSlideBoxDelegate.update();
    };

    $scope.userRegistered = function() {
      $scope.slides = [
        "templates/includes/profile.html",
        "templates/includes/profile-picture.html"
      ];
      $ionicSlideBoxDelegate.update();
      $ionicSlideBoxDelegate.slide(0);
    };
    $scope.checkProfileErrors = function() {
      $scope.profileError = '';
      if ($scope.profile.organization) {
        console.log('### No error');
      } else if (!$scope.profile.name) {
        $scope.profileError = 'name';
      } else if (!$scope.profile.name.first) {
        $scope.profileError = 'first';
      } else if (!$scope.profile.name.last) {
        $scope.profileError = 'last';
      }
    };
    $scope.setProfilePicture = function() {
      $scope.checkProfileErrors();
      if (!$scope.profileError) {
        $ionicSlideBoxDelegate.next();
      } else {
        console.log('#### Error ' + $scope.profileError);
      }
    };
    $scope.resetProfile = function() {
      $ionicSlideBoxDelegate.slide(0);
    };
    $scope.doneRegestering = function() {
      AuthService.createProfile($scope.profile, $scope.selectedTab);
      $state.go('tab.decisions', {
        signUp: true
      });
    };
    // Ui-relayers
    $scope.$watch('auth.email', function() {
      $scope.loginError = '';
      $scope.signUpError = '';
    });
    $scope.$watch('auth.password', function() {
      $scope.loginError = '';
      $scope.signUpError = '';
    });
    $scope.$watch('auth.username', function() {
      $scope.signUpError = '';
    });
    $rootScope.$on('user registered', function(e) {
      e.preventDefault();
      console.log('#### User registered');
      $scope.userRegistered();
    });
    $rootScope.$on('invalid email', function(e) {
      e.preventDefault();
      $scope.authErrors('invalid email');
    });
    $rootScope.$on('email taken', function(e) {
      e.preventDefault();
      $scope.authErrors('email taken');
    });
    $rootScope.$on('invalid password', function(e) {
      e.preventDefault();
      $scope.authErrors('invalid password');
    });
    $rootScope.$on('invalid user', function(e) {
      e.preventDefault();
      $scope.authErrors('invalid user');
    });
    $scope.$watch('profile.name.first', function() {
      if($scope.profile.organization) {
        $scope.profile.organization = '';
      }
    });
    $scope.$watch('profile.name.last', function() {
      if($scope.profile.organization) {
        $scope.profile.organization = '';
      }
    });
    $scope.$watch('profile.organization', function() {
      if($scope.profile.name) {
        $scope.profile.name = {};
      }
    });    
  }
]);
