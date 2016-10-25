/** ***************************************************************************

@name: partyRsvpUsers.js
@description: Exibe o nome dos usuários de cada resposta ao convite de festa
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { name as DisplayNameFilter } from '../../filters/displayNameFilter';

import './partyRsvpUsers.html';

class PartyRsvpUsers {

  constructor($scope, $reactive){
    'ngInject';

    $reactive(this).attach($scope);

    this.getUserById = function(userId) {
      return Meteor.users.findOne(userId);
    }
  }
}

const name = 'partyRsvpUsers';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  DisplayNameFilter
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    bindings: {
      rsvps: '<',
      type: '@'
    },
    controller: PartyRsvpUsers
  });
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================

//============================ CONFIG MODULE =END===============================
