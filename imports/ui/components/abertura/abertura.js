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

    this.showInputDivLocal = true;
    this.showInputDivEstabelecimento = false;
    this.showInputDivRota = false;

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
      $('.barra').css('top', '70%');
      $('.find').css('background-color', 'rgba(0, 0, 0, 1)');
      $('.searchDialog').css('opacity', '1');
      $('#searchOptionLugar').css('background-color', 'rgba(0, 51, 102, 0.9)');
      $('#searchOptionEstabelecimento').css('background-color', 'transparent');
      $('#searchOptionRota').css('background-color', 'transparent');
    }

    this.clicaFecharSearchDialog = function() {
      $('.barra').css('top', '40%');
      $('.find').css('background-color', 'transparent');
      $('.searchDialog').css('opacity', '0');
    }

    this.clicaBackArrow = function() {
      alert("Você clicou em Back Arrow!");
    }

    this.clicaSearchOptionLugar = function() {
      $('#searchOptionLugar').css('background-color', 'rgba(0, 51, 102, 0.9)');
      $('#searchOptionEstabelecimento').css('background-color', 'transparent');
      $('#searchOptionEstabelecimento').css('border-left', '');
      $('#searchOptionRota').css('background-color', 'transparent');
      $('#searchOptionRota').css('border-left', '');
      this.showInputDivLocal = true;
      this.showInputDivEstabelecimento = false;
      this.showInputDivRota = false;
    }

    this.clicaSearchOptionEstabelecimento = function() {
      $('#searchOptionLugar').css('background-color', 'transparent');
      $('#searchOptionEstabelecimento').css('background-color', 'rgba(0, 51, 102, 0.9)');
      $('#searchOptionEstabelecimento').css('border-left', 'solid 3px #eee');
      $('#searchOptionRota').css('background-color', 'transparent');
      $('#searchOptionRota').css('border-left', '');
      this.showInputDivLocal = false;
      this.showInputDivEstabelecimento = true;
      this.showInputDivRota = false;
    }

    this.clicaSearchOptionRota = function() {
      $('#searchOptionLugar').css('background-color', 'transparent');
      $('#searchOptionEstabelecimento').css('background-color', 'transparent');
      $('#searchOptionEstabelecimento').css('border-left', '');
      $('#searchOptionRota').css('background-color', 'rgba(0, 51, 102, 0.9)');
      $('#searchOptionRota').css('border-left', 'solid 3px #eee');
      this.showInputDivLocal = false;
      this.showInputDivEstabelecimento = false;
      this.showInputDivRota = true;
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
