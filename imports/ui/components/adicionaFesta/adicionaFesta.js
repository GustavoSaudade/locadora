/** ***************************************************************************

@name: adicionaFesta.js
@description: Componente para adicionar uma Festa na coleção
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 19/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Festas } from '../../../api/festas/collection';

import './adicionaFesta.html';

class AdicionaFesta {
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
    this.submit = function() {
      console.log('submit:', this.party);
    }
//============================= METHODS =END====================================
  }
}

const name = 'adicionaFesta';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: AdicionaFesta
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
function config($stateProvider) {
  'ngInject';

  $stateProvider.state('adicionaFesta', {
    url: '/adicionaFesta',
    template: '<adiciona-festa></adiciona-festa>'
  });
}
//============================ CONFIG MODULE =END===============================
