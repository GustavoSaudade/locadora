import { Festas } from '../imports/api/festas/collection';

Meteor.startup(() => {
  if (Festas.find().count() === 0) {
    const festas = [{
      'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'
    }, {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }, {
      'name': 'Savage lounging',
      'description': 'Leisure suit required. And only fiercest manners.'
    }];

    festas.forEach((festa) => {
      Festas.insert(festa)
    });
  }
});
