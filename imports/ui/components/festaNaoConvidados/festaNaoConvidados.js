/** ***************************************************************************

@name: festaNaoConvidados.js
@description: Componente para listar usuários ainda não convidados
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 20/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { name as UninvitedFilter } from '../../filters/uninvitedFilter';

import './festaNaoConvidados.html';

class FestaNaoConvidados {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

//============================= SUBSCRIBES =====================================

//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================
    this.helpers({
      users() {
        return Meteor.users.find({});
      }
    });
//============================= HELPERS =END====================================

//============================= METHODS ========================================

//============================= METHODS =END====================================
  }
}

const name = 'festaNaoConvidados';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  UninvitedFilter
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  bindings: {
   festa: '<'
 },
  controllerAs: name,
  controller: FestaNaoConvidados
});
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================

//============================ CONFIG MODULE =END===============================
