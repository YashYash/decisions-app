app.service('CardsService', [
  '$http',
  '$firebaseArray',
  'ConstantsService',
  function(
    $http,
    $firebaseArray,
    ConstantsService) {
    'use srict';
    console.log('#### Cards Service');

    var ref = ConstantsService.fireBaseCardsRef;
    var cards = $firebaseArray(ref);

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
        	console.log(response);
        })
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
