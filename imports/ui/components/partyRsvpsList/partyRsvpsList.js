/** ***************************************************************************

@name: partyRsvpsList.js
@description: Exibe uma lista com os rsvp das festas
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './partyRsvpsList.html';

class PartyRsvpsList {

  constructor($scope, $reactive){
    'ngInject';

    $reactive(this).attach($scope);

  }
}

const name = 'partyRsvpsList';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    bindings: {
      rsvps: '<'
    },
    controller: PartyRsvpsList
  });
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================

//============================ CONFIG MODULE =END===============================
