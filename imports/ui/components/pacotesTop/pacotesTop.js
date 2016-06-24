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
  constructor($scope, $reactive, notificationService) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================
    this.subscribe('users');
    this.subscribe('rotas');
//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
    this.clicaRota = function(rota) {
      var rotaClicada = rota;

      notificationService.prompt2({
        title: "INFORMAÇÕES DA ROTA",
        name: rotaClicada.name,
        description: rotaClicada.description,
        modifier: true,
        callback: function() {
          ons.notification.alert({
            message: 'esse é o callback!',
            modifier: true,
            scope: $scope
          });
        }
      });

    }

    this.initMouse = function(){
      var $pacotesTopRanking = $('.pacotesTopRanking');
      $pacotesTopRanking.on("mousewheel DOMMouseScroll", function(event){
        var delta = event.originalEvent.wheelDelta;
        if(delta > 0){
          this.scrollLeft -= (delta - 100);
        }
        if(delta < 0) {
          this.scrollLeft -= (delta + 100);
        }
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
