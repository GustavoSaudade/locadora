import { Mongo } from 'meteor/mongo';

export const Festas = new Mongo.Collection('festas');

Festas.allow({
  insert(userId, party) {
    return userId && party.owner === userId;
  },
  update(userId, party, fields, modifier) {
    return userId && party.owner === userId;
  },
  remove(userId, party) {
    return userId && party.owner === userId;
  }
});
