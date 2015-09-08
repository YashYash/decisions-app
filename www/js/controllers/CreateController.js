app.controller('CreateController', [
    '$scope',
    '$ionicSlideBoxDelegate',
    '$timeout',
    '$ionicScrollDelegate',
    'StateService',
    'AuthService',
    'ConstantsService',
    'CardsService',
    function(
        $scope,
        $ionicSlideBoxDelegate,
        $timeout,
        $ionicScrollDelegate,
        StateService,
        AuthService,
        ConstantsService,
        CardsService) {
        'use strict';
        console.log('Create Controller Loaded');


        init();

        function init() {
            console.log('#### Init - CreateController');
            $scope.card = {};
            $scope.card.duration = {};
            $scope.card.duration.number = 10;
            $scope.card.duration.type = 'MINUTES';
            $scope.card.optionA = {
                image: ''
            };
            $scope.card.optionB = {
                image: ''
            };
            $scope.slideUpBanner = false;
            $scope.step = 1;
            $scope.dayNumbers = ConstantsService.durationPicker.numbers('days');
            $scope.numbers = $scope.dayNumbers;
            $scope.types = ConstantsService.durationPicker.types();
            $scope.customDuration = true;          
        }

        // Ui-responders
        $scope.getState = function(state) {
            return StateService.state[state];
        };
        $scope.nextStep = function() {
            if ($scope.step < 4) {
                $scope.step++;
            }
        };
        $scope.prevStep = function() {
            if ($scope.step > 1) {
                $scope.step--;
            }
        };
        $scope.inputsFocused = function() {
            $scope.slideUpBanner = true;
        };
        $scope.inputsBlurred = function() {
            $scope.slideUpBanner = false;
        };
        $scope.setDuration = function(duration) {
            $scope.customDuration = false;
            $scope.card.duration.quick = duration;
            $scope.card.duration.type = duration;
            $scope.card.duration.number = 1;
        };
        $scope.toggleDurationOverlay = function() {
            $scope.card.duration.quick = '';
            $scope.showDurationOverlay = !$scope.showDurationOverlay;
            if ($scope.showDurationOverlay) {
                $scope.card.duration.number = 2;
                $scope.card.duration.type = 'HOURS';
                $scope.customDuration = true;
                $timeout(function() {
                    $scope.animateOverlay = true;
                }, 200);
            } else {
                $scope.animateOverlay = false;
            }
        };

        $scope.scrollingNumbers = function() {
            var position = $ionicScrollDelegate.$getByHandle('number-scroll').getScrollPosition();
            if (position.top < 0) {
                $scope.card.duration.number = 0;
            } else if (position.top > 360) {
                $scope.card.duration.number = 360;
            } else {
                $scope.card.duration.number = Math.floor(position.top);
            }
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        };
        $scope.incrementDuration = function() {
            if ($scope.card.duration.number < 360) {
                $scope.card.duration.number++;
            }
            $scope.materialTopShadow = true;
            $timeout(function() {
                $scope.materialTopShadow = false;
            }, 100);
        };

        $scope.decreaseDuration = function() {
            if ($scope.card.duration.number > 0) {
                $scope.card.duration.number--;
            }
            $scope.materialBottomShadow = true;
            $timeout(function() {
                $scope.materialBottomShadow = false;
            }, 100);
        };

        $scope.setDurationType = function(type) {
            $scope.card.duration.type = type;
        };
        $scope.setOptionImages = function(key, image) {
            console.log("Key:" + key);
            console.log("Image:" + image);
            $scope.card[key].image = image;
            console.log($scope.card);
            // $scope.card[key].image = imageURI;
        };

        $scope.togglePreviewCard = function() {
            $scope.showPreviewCard = !$scope.showPreviewCard;
        };
        $scope.createCard = function() {
            $scope.card.expiration = getDurationInSeconds($scope.card.duration);
            $scope.card.user = AuthService.getUser().uid;
            CardsService.createCard($scope.card);

        };
        function getDurationInSeconds(duration) {
            var expiration;
            var num = Number(duration.number);
            if(duration.type === 'HOURS' || duration.type === 'HOUR') {
                expiration = new Date(moment().add(num, 'hours'));
            }
            if(duration.type === 'MINUTES' || duration.type === 'MINUTE') {
                expiration = new Date(moment().add(num, 'minutes'));
            }
            if(duration.type === 'SECONDS' || duration.type === 'SECOND') {
                expiration = new Date(moment().add(num, 'seconds'));
            }
            if(duration.type === 'DAYS' || duration.type === 'DAY') {
                expiration = new Date(moment().add(num, 'days'));
            }            
            if(duration.type === 'WEEKS' || duration.type === 'WEEK') {
                expiration = new Date(moment().add(num, 'weeks'));
            }
            if(duration.type === 'MONTHS' || duration.type === 'MONTH') {
                expiration = new Date(moment().add(num, 'months'));
            }
            if(duration.type === 'YEARS' || duration.type === 'YEAR') {
                expiration = new Date(moment().add(num, 'years'));
            }
            console.log(expiration);
            return expiration;
        }
    }
]);
