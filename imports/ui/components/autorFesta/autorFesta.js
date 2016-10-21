/** ***************************************************************************

@name: autorFesta.js
@description: Componente para listar o autor da Festa
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 21/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { name as DisplayNameFilter } from '../../filters/displayNameFilter';

import './autorFesta.html';

class AutorFesta {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

//============================= SUBSCRIBES =====================================

//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================
    this.helpers({
      creator() {
        if (!this.party) {
          return '';
        }

        const owner = this.party.owner;

        if (Meteor.userId() !== null && owner === Meteor.userId()) {
          return 'Me';
        }

        return Meteor.users.findOne(owner) || 'Nobody';
      }
    });
//============================= HELPERS =END====================================

//============================= METHODS ========================================

//============================= METHODS =END====================================
  }
}

const name = 'autorFesta';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  DisplayNameFilter
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  bindings: {
   festa: '<'
 },
  controllerAs: name,
  controller: AutorFesta
});
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================

//============================ CONFIG MODULE =END===============================
