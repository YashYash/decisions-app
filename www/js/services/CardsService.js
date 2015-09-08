app.service('CardsService', [
  '$rootScope',
  '$http',
  '$firebaseArray',
  '$firebaseObject',
  'ConstantsService',
  'AuthService',
  'StateService',
  function(
    $rootScope,
    $http,
    $firebaseArray,
    $firebaseObject,
    ConstantsService,
    AuthService,
    StateService) {
    'use srict';
    console.log('#### Cards Service');

    var cardsRef = ConstantsService.fireBaseCardsRef;
    var cards = $firebaseArray(cardsRef);
    var cardsObject = $firebaseObject(cardsRef);
    var usersRef = ConstantsService.fireBaseUsersRef;
    var users = $firebaseObject(usersRef);

    return {
      createCard: function(c) {
        console.log(c);
        var card = {
          title: c.title,
          headingA: c.optionA.title,
          imageA: c.optionA.image,
          headingB: c.optionB.title,
          imageB: c.optionB.image,
          expiration: (c.expiration).toString(),
          user: c.user
        }
        console.log(card);
        cards.$add(card).then(function(response) {
          console.log('#### Added the new card');
          if (!users[AuthService.getUser().uid]['cards']) {
            users[AuthService.getUser().uid]['cards'] = {};
          }
          users[AuthService.getUser().uid]['cards'][response.key()] = card;
          users.$save().then(function(response) {
            console.log('#### Pushed the cards Id to the users cards object');
            $rootScope.$broadcast('user changed');    // might be useless - double check later
          });
        })
      },
      getCard: function(key) {
          var cardUrl = ConstantsService.fireBaseCardsUrl + '/' + key;
          var cardRef = new Firebase(cardUrl);
          var card = $firebaseObject(cardRef);
          var result = card.$loaded().then(function(response) {
            return response;
          })        
          return result;
      },
      getFriendsCards: function(userId) {

      }
    }
  }
])




// Firebase Card Schema

/*

card: {
  title: 'What highway should I take today',
  headingA: 'Red Ralph Lauren',
  headinB: 'Yellow Tommy H',
  imageA: 'http://someimageurl.jpg'
  imageB: 'http://someimageurl.jpg',
  expirationDate: new Date.now() - (new Date.now() - card.duration),
  user: userRefId,
  chooseA: [],
  chooseB: []
}

chooseA/chooseB: [
  {
    user: userRefId,
    name: user.name,
    date: new Date.now();
  }
]

Once a card is created push it's refID into an array in the User object, called decisions: []

*/
