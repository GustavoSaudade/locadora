import { Meteor } from 'meteor/meteor';

import { Festas } from './collection';


if(Meteor.isServer) {
  Meteor.publish('festas', function () {  
    const selector = {
      $or: [{
        // the public parties
        $and: [{
          public: true
        }, {
          public: {
            $exists: true
          }
        }]
      }, {
        // when logged in user is the owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };
    return Festas.find(selector);
  });
}
