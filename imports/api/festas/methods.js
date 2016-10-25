import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

import { Festas } from './collection';

function getContactEmail(user) {
  if (user.emails && user.emails.length)
    return user.emails[0].address;

  if (user.services && user.services.facebook && user.services.facebook.email)
    return user.services.facebook.email;

  return null;
}

export function invite(partyId, userId) {
  check(partyId, String);
  check(userId, String);

  if (!this.userId) {
    throw new Meteor.Error(400, 'You have to be logged in!');
  }

  const party = Festas.findOne(partyId);

  if (!party) {
    throw new Meteor.Error(404, 'No such party!');
  }

  if (party.owner !== this.userId) {
    throw new Meteor.Error(404, 'No permissions!');
  }

  if (party.public) {
    throw new Meteor.Error(400, 'That party is public. No need to invite people.');
  }

  if (userId !== party.owner && ! _.contains(party.invited, userId)) {
    Festas.update(partyId, {
      $addToSet: {
        invited: userId
      }
    });

    const replyTo = getContactEmail(Meteor.users.findOne(this.userId));
    const to = getContactEmail(Meteor.users.findOne(userId));

    if (Meteor.isServer && to) {
      Email.send({
        to,
        replyTo,
        from: 'noreply@socially.com',
        subject: `PARTY: ${party.title}`,
        text: `
          Olá, Eu gostaria de convidar você para a ${party.title} do grupo.
          Confira o convite no link: ${Meteor.absoluteUrl()}
        `
      });
    }
  }
}

export function rsvp(partyId, rsvp) {
  check(partyId, String);
  check(rsvp, String);

  if (!this.userId) {
    throw new Meteor.Error(403, 'You must be logged in to RSVP');
  }

  if (!_.contains(['yes', 'no', 'maybe'], rsvp)) {
    throw new Meteor.Error(400, 'Invalid RSVP');
  }

  const party = Festas.findOne({
    _id: partyId,
    $or: [{
      // is public
      $and: [{
        public: true
      }, {
        public: {
          $exists: true
        }
      }]
    },{
      // is owner
      $and: [{
        owner: this.userId
      }, {
        owner: {
          $exists: true
        }
      }]
    }, {
      // is invited
      $and: [{
        invited: this.userId
      }, {
        invited: {
          $exists: true
        }
      }]
    }]
  });

  if (!party) {
    throw new Meteor.Error(404, 'No such party');
  }

  const hasUserRsvp = _.findWhere(party.rsvps, {
    user: this.userId
  });

  if (!hasUserRsvp) {
    // add new rsvp entry
    Festas.update(partyId, {
      $push: {
        rsvps: {
          rsvp,
          user: this.userId
        }
      }
    });
  } else {
    // update rsvp entry
    const userId = this.userId;
    Festas.update({
      _id: partyId,
      'rsvps.user': userId
    }, {
      $set: {
        'rsvps.$.rsvp': rsvp
      }
    });
  }
}

Meteor.methods({
  invite,
  rsvp
});
