/** ***************************************************************************

@name: removeFesta.js
@description: Componente para excluir uma festa
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 19/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Festas } from '../../../api/festas/collection';

import './removeFesta.html';

class RemoveFesta {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

//============================= SUBSCRIBES =====================================
    this.subscribe('users');
    this.subscribe('festas');
//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================

//============================= HELPERS =END====================================

//============================= METHODS ========================================
    this.remove = function() {
      if (this.festa) {
        Festas.remove(this.festa._id);
      }
    }
//============================= METHODS =END====================================
  }
}

const name = 'removeFesta';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  bindings: {
   festa: '<'
 },
  controllerAs: name,
  controller: RemoveFesta
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
function config($stateProvider) {
  'ngInject';

  $stateProvider.state('removeFesta', {
    url: '/removeFesta',
    template: '<remove-festa></remove-festa>'
  });
}
//============================ CONFIG MODULE =END===============================
