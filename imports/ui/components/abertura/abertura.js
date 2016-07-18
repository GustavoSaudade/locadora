/** ***************************************************************************

@name: abertura.js
@description: Arquivos que configura o modulo controller da pagina abertura
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/05/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as MapaLocation } from '../mapaLocation/mapaLocation';

import './abertura.html';


class Abertura {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.showInputDivLocal = true;
    this.showInputDivEstabelecimento = false;
    this.showInputDivRota = false;

    this.showMessages = true;

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

    this.clicaFind = function() {
      var tamanhoDaTela = $( window ).width();
      if(tamanhoDaTela == 384){
        $('.titulo').css('display', 'none');
        $('.barra').css('display', 'none');
        $('.searchDialog').css('opacity', '1');
        $('#searchOptionLugar').css('background-color', 'rgba(0, 51, 102, 0.9)');
        $('#searchOptionEstabelecimento').css('background-color', 'transparent');
        $('#searchOptionRota').css('background-color', 'transparent');
        this.showMessages = false;
      } else {
        $('.barra').css('top', '70%');
        $('.find').css('background-color', 'rgba(0, 0, 0, 1)');
        $('.searchDialog').css('opacity', '1');
        $('#searchOptionLugar').css('background-color', 'rgba(0, 51, 102, 0.9)');
        $('#searchOptionEstabelecimento').css('background-color', 'transparent');
        $('#searchOptionRota').css('background-color', 'transparent');
        this.showMessages = false;
      }
    }

    this.clicaFecharSearchDialog = function() {
      var tamanhoDaTela = $( window ).width();
      if(tamanhoDaTela == 384) {
        $('.titulo').css('display', 'inline');
        $('.barra').css('display', 'inline');
        $('.searchDialog').css('opacity', '0');
        $('#searchOptionLugar').css('background-color', 'rgba(0, 51, 102, 0.9)');
        $('#searchOptionEstabelecimento').css('background-color', 'transparent');
        $('#searchOptionRota').css('background-color', 'transparent');
        this.showMessages = false;
      } else {
        $('.barra').css('top', '40%');
        $('.find').css('background-color', 'transparent');
        $('.searchDialog').css('opacity', '0');
        this.showMessages = true;
      }
    }

    this.clicaBackArrow = function() {
      $.gritter.add({
                        title : "Sucesso!",
                        text : "Você clicou nas configurações, mas isso não faz nada!",
                        class_name : "gritter"
                    });
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
      $('#searchOptionEstabelecimento').css('border-left', 'solid 1px #ddd');
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
      $('#searchOptionRota').css('border-left', 'solid 1px #ddd');
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
  uiRouter,
  MapaLocation
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
