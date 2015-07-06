var app = angular.module('decisions', ['ionic', 'firebase', 'ionic.contrib.ui.cards', 'ionic-material', 'ngCordova', 'ion-affix'])

app.config(function($stateProvider, $urlRouterProvider) {
  console.log('Routing now');
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


app.constant('moment', moment);
app.filter('moment', function() {
  return function(dateString, format, calendar) {
    return moment(dateString).format(format);
  };
});
