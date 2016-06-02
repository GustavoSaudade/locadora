/** ***************************************************************************

@name: abertura.js
@description: Arquivos que configura o modulo controller da pagina abertura
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/05/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './abertura.html';


class Abertura {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

//============================= SUBSCRIBES =====================================
    this.subscribe('users');
//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================
    this.helpers({
      users() {
        return Meteor.users.find({});
      }
    });
//============================= HELPERS =END====================================

//============================= METHODS ========================================
    this.clicaWorld = function() {
      alert("Você clicou no mundo!");
    }

    this.clicaFriends = function() {
      alert("Você clicou em Frinds!");
    }

    this.clicaMyRoutes = function() {
      alert("Você clicou em My Routes!");
    }

    this.clicaFind = function() {
      alert("Você clicou em Find!");
    }

    this.clicaBackArrow = function() {
      alert("Você clicou em Back Arrow!");
    }
//============================= METHODS =END====================================
  }
}

const name = 'abertura';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Abertura
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
function config($stateProvider) {
  'ngInject';

  $stateProvider.state('abertura', {
    url: '/abertura',
    template: '<abertura></abertura>'
  });
}
//============================ CONFIG MODULE =END===============================
