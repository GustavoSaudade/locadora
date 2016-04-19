import { Mongo } from 'meteor/mongo';

export const Rotas = new Mongo.Collection('rotas');

Rotas.allow({
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
