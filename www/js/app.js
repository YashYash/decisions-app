var app = angular.module('decisions', ['ionic', 'firebase', 'ionic.contrib.ui.cards'])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.auth', {
      url: '/auth',
      views: {
        'auth': {
          templateUrl: 'templates/auth.html',
          controller: 'AuthController'
        }
      }
    })
    .state('tab.decisions', {
      url: '/decisions/:signUp',
      views: {
        'decisions': {
          templateUrl: 'templates/decisions.html',
          controller: 'DecisionsController'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/auth');

});



  // .state('tab.chats', {
  //     url: '/chats',
  //     views: {
  //       'tab-chats': {
  //         templateUrl: 'templates/tab-chats.html',
  //         controller: 'ChatsCtrl'
  //       }
  //     }
  //   })
  //   .state('tab.chat-detail', {
  //     url: '/chats/:chatId',
  //     views: {
  //       'tab-chats': {
  //         templateUrl: 'templates/chat-detail.html',
  //         controller: 'ChatDetailCtrl'
  //       }
  //     }
  //   })