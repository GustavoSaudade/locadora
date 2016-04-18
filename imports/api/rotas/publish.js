import { Meteor } from 'meteor/meteor';

import { Rotas } from './collection';



if(Meteor.isServer) {
  Meteor.publish('rotas', function () {
    return Rotas.find({});
  });
}
