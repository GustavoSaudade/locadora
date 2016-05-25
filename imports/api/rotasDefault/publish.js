import { Meteor } from 'meteor/meteor';

import { RotasDefault } from './collection';



if(Meteor.isServer) {
  Meteor.publish('rotasDefault', function () {
    return RotasDefault.find({});
  });
}
