/** ***************************************************************************

@name: partyUnanswered.js
@description: Exibe os usuários que ainda não responderam
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { name as DisplayNameFilter } from '../../filters/displayNameFilter';

import './partyUnanswered.html';

class PartyUnanswered {

  constructor($scope, $reactive){
    'ngInject';

    $reactive(this).attach($scope);

    this.getUnanswered = function() {
      if (!this.festa || !this.festa.invited) {
        return;
      }

      return this.festa.invited.filter((user) => {
        return !_.findWhere(this.festa.rsvps, { user });
      });
    }

    this.getUserById = function(userId) {
      return Meteor.users.findOne(userId)
    }
  }
}

const name = 'partyUnanswered';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  DisplayNameFilter
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    bindings: {
      festa: '<'
    },
    controller: PartyUnanswered
  });
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================

//============================ CONFIG MODULE =END===============================
