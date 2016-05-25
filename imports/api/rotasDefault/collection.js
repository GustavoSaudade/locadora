import { Mongo } from 'meteor/mongo';

export const RotasDefault = new Mongo.Collection('rotasDefault');

RotasDefault.allow({
  insert(userId, rota) {
    return userId && rota.owner === userId;
  },
  update(userId, rota, fields, modifier) {
    return userId && rota.owner === userId;
  },
  remove(userId, rota) {
    return userId && rota.owner === userId;
  }
});
