app.service('ConstantsService', [
  function() {
    'use strict';

    var isProd = false;
    var fireBaseRootUrl = 'https://life-decisions' + (isProd ? '-prod' : '') + '.firebaseio.com/';
    var fireBaseRootRef = new Firebase(fireBaseRootUrl);
    var fireBaseUsersUrl = fireBaseRootUrl + 'users';
    var fireBaseUsersRef = new Firebase(fireBaseUsersUrl);
    var fireBaseCardsUrl = fireBaseRootUrl + 'cards';
    var fireBaseCardsRef = new Firebase(fireBaseCardsUrl);
    console.log()

    return {
      fireBaseRootUrl: fireBaseRootUrl,
      fireBaseRootRef: fireBaseRootRef,
      fireBaseUsersUrl: fireBaseUsersUrl,
      fireBaseUsersRef: fireBaseUsersRef,
      fireBaseCardsUrl: fireBaseCardsUrl,
      fireBaseCardsRef: fireBaseCardsRef,
      durationPicker: {
        numbers: function(type) {
          var numbers = [];
          for (var i = 0; i <= 25; i++) {
            numbers.push({
              number: i + 1
            });
          }
          return numbers;
        },
        types: function() {
          var types = [{
            "name": "MINUTES"
          }, {
            "name": "HOURS"
          }, {
            "name": "DAYS"
          }];
          return types;
        }
      },
      alphabets: function() {
        var alphabets = {
          'A': {
            'name': 'A',
            'contacts': []
          }, 
          'B': {
            'name': 'B',
            'contacts': []            
          }, 
          'C': {
            'name': 'C',
            'contacts': []            
          }, 
          'D': {
            'name': 'D',
            'contacts': []            
          }, 
          'E': {
            'name': 'E',
            'contacts': []            
          }, 
          'F': {
            'name': 'F',
            'contacts': []            
          }, 
          'G': {
            'name': 'G',
            'contacts': []            
          }, 
          'H': {
            'name': 'H',
            'contacts': []            
          }, 
          'I': {
            'name': 'I',
            'contacts': []            
          }, 
          'J': {
            'name': 'J',
            'contacts': []            
          }, 
          'K': {
            'name': 'K',
            'contacts': []            
          }, 
          'L': {
            'name': 'L',
            'contacts': []            
          }, 
          'M': {
            'name': 'M',
            'contacts': []            
          }, 
          'N': {
            'name': 'N',
            'contacts': []            
          },
          'O': {
            'name': 'O',
            'contacts': []  
          },
          'P': {
            'name': 'P',
            'contacts': []  
          },
          'Q': {
            'name': 'Q',
            'contacts': []              
          },
          'R': {
            'name': 'R',
            'contacts': []              
          },
          'S': {
            'name': 'S',
            'contacts': []              
          },
          'T': {
            'name': 'T',
            'contacts': []              
          }, 
          'U': {
            'name': 'U',
            'contacts': []              
          },
          'V': {
            'name': 'V',
            'contacts': []              
          },
          'W': {
            'name': 'W',
            'contacts': []              
          },
          'X': {
            'name': 'X',
            'contacts': []              
          },
          'Y': {
            'name': 'Y',
            'contacts': []              
          }, 
          'Z': {
            'name': 'Z',
            'contacts': []              
          }
        };
        return alphabets;
      },
      devContacts: function() {
        var contacts = [{
          'name': {
            'formatted': 'Mike'
          }
        }, {
          'name': {
            'formatted': 'John'
          }
        }, {
          'name': {
            'formatted': 'Karl'
          }
        }, {
          'name': {
            'formatted': 'Micahel'
          }
        }, {
          'name': {
            'formatted': 'Kristine'
          }
        }, {
          'name': {
            'formatted': 'Carlos'
          }
        }, {
          'name': {
            'formatted': 'Shaniqua'
          }
        }, {
          'name': {
            'formatted': 'Mark'
          }
        }, {
          'name': {
            'formatted': 'Scott'
          }
        }, {
          'name': {
            'formatted': 'Lewis'
          }
        }, {
          'name': {
            'formatted': 'Helen'
          }
        }, {
          'name': {
            'formatted': 'Michelle'
          }
        }, {
          'name': {
            'formatted': 'Hayward'
          }
        }, {
          'name': {
            'formatted': 'Marco'
          }
        }, {
          'name': {
            'formatted': 'James'
          }
        }, {
          'name': {
            'formatted': 'Micahel'
          }
        }, {
          'name': {
            'formatted': 'John'
          }
        }, {
          'name': {
            'formatted': 'Karl'
          }
        }, {
          'name': {
            'formatted': 'Micahel'
          }
        }, {
          'name': {
            'formatted': 'Kristine'
          }
        }, {
          'name': {
            'formatted': 'Carlos'
          }
        }, {
          'name': {
            'formatted': 'Shaniqua'
          }
        }, {
          'name': {
            'formatted': 'Mark'
          }
        }, {
          'name': {
            'formatted': 'Scott'
          }
        }, {
          'name': {
            'formatted': 'Lewis'
          }
        }, {
          'name': {
            'formatted': 'Helen'
          }
        }, {
          'name': {
            'formatted': 'Michelle'
          }
        }, {
          'name': {
            'formatted': 'Hayward'
          }
        }, {
          'name': {
            'formatted': 'Marco'
          }
        }, {
          'name': {
            'formatted': 'James'
          }
        }, {
          'name': {
            'formatted': 'Micahel'
          }
        }];
        return contacts;
      }
    };
  }
]);
