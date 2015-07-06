app.controller('ViewCardsController', [
  '$scope',
  '$timeout',
  '$ionicSlideBoxDelegate',
  '$cordovaContacts',
  'StateService',
  'ConstantsService',
  function(
    $scope,
    $timeout,
    $ionicSlideBoxDelegate,
    $cordovaContacts,
    StateService,
    ConstantsService) {
    'use strict';
    console.log('View-Cards Controller Loaded');

    // init
    init();

    function init() {
      console.log('#### Init - ViewCardsController');
      $scope.cards = [{
        number: 1
      }, {
        number: 2
      }, {
        number: 3
      }];
      $scope.showCards = true;
      $scope.contacts = StateService.state['User'].contacts;
      console.log($scope.contacts);
      $scope.alphabets = ConstantsService.alphabets();
      console.log('blah');
      sortContacts();
    }

    function sortContacts() {
      console.log('#### Sorting the contacts again');
      for (var i = 0; i < $scope.contacts.length; i++) {
        var letter = $scope.contacts[i].name.formatted[0];
        var key = letter.toUpperCase();
        $scope.alphabets[key].contacts.push($scope.contacts[i]);
      }
      console.log($scope.alphabets);
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    }

    // Ui-responders
    $scope.slideTo = function(slide) {
      $ionicSlideBoxDelegate.slide(slide);
    };
    $scope.select = function(option) {
      $scope.clickAnimate = option;
      $timeout(function() {
        $scope.clickAnimate = false;
      }, 120);
    };
    $scope.toggleView = function() {
      $scope.showCards = !$scope.showCards;
    };
    $scope.getContacts = function() {};
  }
]);
