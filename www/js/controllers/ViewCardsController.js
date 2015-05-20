app.controller('ViewCardsController', [
    '$scope',
    '$timeout',
    'StateService',
    function(
        $scope,
        $timeout,
        StateService) {
        'use strict';
        console.log('View-Cards Controller Loaded');
        init();

        function init() {
            console.log('#### Init - ViewCardsController');
            $scope.colorOne = 'rgb(15, 40, 82)',
                $scope.colorTwo = 'rgb(56, 72, 94)',
                $scope.colorThree = 'rgb(108, 120, 128)',
                $scope.colorFour = 'rgb(17, 13, 11)';
            $scope.cardTypes = [{
                "heading": 'Which shirt should I buy?',
                "optionOneImage": 'http://johnlewis.scene7.com/is/image/JohnLewis/000028861alt3?$prod_exlrg$',
                "optionTwoImage": 'http://in1.ccio.co/s5/gD/sF/229965124692323204byi9jWT2c.jpg',
                "thanks": 'Thanks for the response you chode. EH EH EH ...',
                "color1": 'rgb(36, 44, 63)',
                "color2": 'rgb(165, 167, 166)',
                "color3": 'rgb(184, 217, 226)',
                "color4": 'rgb(44, 27, 20)',
                "username": 'syd43star'
            }, {
                "heading": 'Should I take 101 or 280 to work?',
                "optionOneImage": 'https://s-media-cache-ak0.pinimg.com/originals/94/44/8c/94448cb773462e81c0b712cb659c7738.jpg',
                "optionTwoImage": 'http://farm1.staticflickr.com/188/392723033_2e6056e6c2_z.jpg',
                "thanks": 'Thanks for the response you chode. EH EH EH ...',
                "color1": 'rgb(15, 40, 82)',
                "color2": 'rgb(56, 72, 94)',
                "color3": 'rgb(108, 120, 128)',
                "color4": 'rgb(17, 13, 11)',
                "username": 'mikeanderson'
            }, {
                "heading": 'Which of these is a better sunset?',
                "optionOneImage": 'http://www.porathcontractors.com/gallery/albums/projects/Sunset.sized.jpg',
                "optionTwoImage": 'http://www.hdwallpapers.in/walls/thailand_beach_sunset-wide.jpg',
                "thanks": 'Thanks bruhhhhhh',
                "color1": 'rgb(231, 75, 135)',
                "color2": 'rgb(251, 49, 17)',
                "color3": 'rgb(231, 15, 43)',
                "color4": 'rgb(213, 11, 48)',
                "username": 'yashsaxena1217'
            }, {
                "heading": 'Should I take 101 or 280 to work?',
                "optionOneImage": 'https://s-media-cache-ak0.pinimg.com/originals/94/44/8c/94448cb773462e81c0b712cb659c7738.jpg',
                "optionTwoImage": 'http://farm1.staticflickr.com/188/392723033_2e6056e6c2_z.jpg',
                "thanks": 'Thanks for the response you chode. EH EH EH ...',
                "color1": 'rgb(15, 40, 82)',
                "color2": 'rgb(56, 72, 94)',
                "color3": 'rgb(108, 120, 128)',
                "color4": 'rgb(17, 13, 11)',
                "username": 'anthony_dawg'
            }, {
                "heading": 'Should I take 101 or 280 to work?',
                "optionOneImage": 'https://s-media-cache-ak0.pinimg.com/originals/94/44/8c/94448cb773462e81c0b712cb659c7738.jpg',
                "optionTwoImage": 'http://farm1.staticflickr.com/188/392723033_2e6056e6c2_z.jpg',
                "thanks": 'Thanks for the response you chode. EH EH EH ...',
                "color1": 'rgb(15, 40, 82)',
                "color2": 'rgb(56, 72, 94)',
                "color3": 'rgb(108, 120, 128)',
                "color4": 'rgb(17, 13, 11)',
                "username": 'chode-master'
            }];
            $scope.countDown = 500;
            fakeCountdown();
             function fakeCountdown() {
                $scope.countDown = $scope.countDown - 1;
                if ($scope.countDown > 0) {
                    $timeout(function() {
                        fakeCountdown();
                    }, 1000);
                } else {
                    $scope.countDown = 500;
                    fakeCountdown();
                }
            };
        }
        $scope.getState = function(state) {
            return StateService.state[state];
        };
        $scope.cards = Array.prototype.slice.call($scope.cardTypes, 0, 0);
        $scope.cardSwiped = function(card) {
            console.log('### Swiped');
            $scope.addCard();
        };
        $scope.cardDestroyed = function(card, index) {
            $scope.card = card;
            console.log('Card destroyed');
            $scope.$apply();
            // $scope.cards.splice(index, 1);
        };

        $scope.addCard = function() {
            var card = $scope.cardTypes[Math.floor(Math.random() * $scope.cardTypes.length)];
            card.id = Math.random();
            console.log(card);
            $scope.colorOne = card.color1;
            $scope.colorTwo = card.color2;
            $scope.colorThree = card.color3;
            $scope.colorFour = card.color4;
            $scope.cards.push(angular.extend({}, card));
        };
    }
]);
