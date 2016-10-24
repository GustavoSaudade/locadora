/** ***************************************************************************

@name: listaFestas.js
@description: Componente para exibir uma lista de festas, com opções CRUD
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 19/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Festas } from '../../../api/festas/collection';
import { name as AdicionaFesta } from '../adicionaFesta/adicionaFesta';
import { name as RemoveFesta } from '../removeFesta/removeFesta';

import './listaFestas.html';

class ListaFestas {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);

//============================= SUBSCRIBES =====================================
    this.subscribe('users');
    this.subscribe('festas');
//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================
    this.helpers({
      festas() {
        return Festas.find().fetch();
      }
    });
//============================= HELPERS =END====================================

//============================= METHODS ========================================
    this.adicionarFesta = function() {
      $state.go('adicionaFesta');
    }

    this.init = function() {
      if(this.festas.length === 0)
        this.listaVazia = true;
    }
//============================= METHODS =END====================================
  }
}

const name = 'listaFestas';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  AdicionaFesta,
  RemoveFesta
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: ListaFestas
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
function config($stateProvider) {
  'ngInject';

  $stateProvider.state('listaFestas', {
    url: '/listaFestas',
    template: '<lista-festas></lista-festas>',
    resolve: {
      currentUser($q) {
        if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
  });
}
//============================ CONFIG MODULE =END===============================
