app.controller('DashboardController', [
  '$scope',
  '$rootScope',
  '$ionicScrollDelegate',
  '$firebaseObject',
  '$firebaseArray',
  'StateService',
  'AuthService',
  'CardsService',
  'ConstantsService',
  function(
    $scope,
    $rootScope,
    $ionicScrollDelegate,
    $firebaseObject,
    $firebaseArray,
    StateService,
    AuthService,
    CardsService,
    ConstantsService) {
    'use strict';
    console.log('Dashboard Controller Loaded');


    init();

    function init() {
      console.log('#### Init - DashboardController');
      $scope.cards = [];
    }

    // Ui-responders 
    $scope.getState = function(state) {
      return StateService.state[state];
    };

    $scope.scrollingContent = function() {
      var scrollTop = $ionicScrollDelegate.$getByHandle('dashboardScroll').getScrollPosition().top;
      if (scrollTop > 0) {
        $scope.slideUpBanner = true;
      } else {
        $scope.slideUpBanner = false;
      }
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    };

    var userId = AuthService.getUser().uid;
    var userRef = new Firebase(ConstantsService.fireBaseUsersUrl + '/' + userId);
    var user = $firebaseObject(userRef);

    user.$watch(function() {
      console.log('#### User has changeddd');
      // getCards(StateService.state['User'].info.cards)
      console.log(StateService.state['User'].info.cards);
    });

    // Ui-relayers

  }
]);
