/** ***************************************************************************

@name: PacotesTop.js
@description: Configura o modulo controller da diretiva pacotesTop
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/05/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './pacotesTop.html';
import { Rotas } from '../../../api/rotas/collection';

class PacotesTop {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================
    this.subscribe('users');
    this.subscribe('rotas');
//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
    this.clicaRota = function(rota) {
      var rotaClicada = rota;
      $('.pacotesDefaultContent').css("visibility", "hidden");
      $('.informacoesDaRota').css("visibility", "visible");
      $('.nomeDaRota').html(rotaClicada.name);
      $('.descricaoDaRota').html(rotaClicada.description);
    }

    this.initMouse = function(){
      var $pacotesTopRanking = $('.pacotesTopRanking');
      var scrollTime = 0.5;
      var scrollDistance = 640;
      $pacotesTopRanking.on("mousewheel DOMMouseScroll", function(event){
        var delta = event.originalEvent.wheelDelta;
        this.scrollLeft -= (delta);
        event.preventDefault();
      });
    }
//============================= METHODS =END====================================
//============================= HELPERS ========================================
    this.helpers({
      rotas() {
        return Rotas.find({});
      },
      currentUserId() {
        return Meteor.userId();
      }
    });
//============================= HELPERS =END====================================
  }
}


const name = 'pacotesTop';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: PacotesTop
});
//============================ MODULE =END======================================
