/** ***************************************************************************

@name: home.js
@description: Arquivo que configura o modulo controller da pagina home
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/05/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import './home.html';
import { name as PacotesTop } from '../pacotesTop/pacotesTop';
import { name as PacotesDefault } from '../pacotesDefault/pacotesDefault';

class Home {
  constructor($scope, $reactive, notificationService) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================
    Meteor.subscribe('users');
    Meteor.subscribe('rotas');
//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
    this.clickSearch = function() {

          notificationService.prompt({
            title: "BUSCA",
            message: "Digite um local, um amigo, um desejo...",
            modifier: true,
            callback: function(textoDigitado) {
              ons.notification.alert({
                message: 'Sua busca por ' + textoDigitado + ' não retornou nada pq o programador não implementou essa funcionalidade',
                modifier: true,
                scope: $scope
              });
            }
          });

    }

    this.closeSearch = function() {
      alert("Heyyy");
    }

    this.clickLocale = function () {
      $('.seuHumor').css("visibility", "hidden");
      $('.mapa').css("visibility", "visible");
      $('.pacotesDefault').css("animation-name", "fadeOutRight");
      $('.pacotesDefault').css("-webkit-animation-name", "fadeOutRight");
      $('.pacotesDefault').css("visibility", "hidden");
      $('.mapaContent').css("animation-name", "fadeInRight");
      $('.mapaContent').css("-webkit-animation-name", "fadeInRight");
      $('.mapaContent').css("visibility", "visible");
      $('.pacotesTopRanking').css('visibility', 'hidden');
    }

    this.closeRotaDetail = function() {
      $('.informacoesDaRota').css("visibility", "hidden");
      $('.pacotesDefaultContent').css("visibility", "visible");
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
