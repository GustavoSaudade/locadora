import { Meteor } from 'meteor/meteor';

import { Festas } from './collection';


if(Meteor.isServer) {
  Meteor.publish('festas', function () {
    return Festas.find({});
  });
}
