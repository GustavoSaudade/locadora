/** ***************************************************************************

NAME: home.js
DESCRIPTION: Arquivo que configura o modulo controller da pagina home
AUTHOR: Gustavo Kluwe Saudade
LAST MODIFICATION: 25/05/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import './home.html';
import { name as PacotesTop } from '../pacotesTop/pacotesTop';
import { name as PacotesDefault } from '../pacotesDefault/pacotesDefault';

class Home {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================
    Meteor.subscribe('users');
    Meteor.subscribe('rotas');
//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
    this.clickSearch = function() {
      $('.modalSearch').css("visibility", "visible");
    }

    this.closeSearch = function() {
      $('.modalSearch').css("visibility", "hidden");
    }

    this.closeRotaDetail = function() {
      $('.informacoesDaRota').css("visibility", "hidden");
      $('.superContent').css("visibility", "visible");
    }

    this.clicaComprar = function() {
      alert('você clicou em COMPRAR!');
    }

    this.clicaCurtir = function() {
      alert('Você clicou em CURTIR!');
    }

    this.clicaCompartilhar = function() {
      alert('Você clicou em COMPARTILHAR!');
    }

    this.clicaFacebook = function() {
      alert('Você clicou em facebook');
    }
//============================= METHODS =END====================================
  }
}

const name = 'home';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagination,
  PacotesTop,
  PacotesDefault
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Home
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
  function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
}
//============================ CONFIG MODULE =END===============================
