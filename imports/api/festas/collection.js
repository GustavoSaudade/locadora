import { Mongo } from 'meteor/mongo';

export const Festas = new Mongo.Collection('festas');

Festas.allow({
  insert(userId, festa) {
    return userId && festa.owner === userId;
  },
  update(userId, festa, fields, modifier) {
    return userId && festa.owner === userId;
  },
  remove(userId, festa) {
    return userId && festa.owner === userId;
  }
});
