/** ***************************************************************************

@name: pacotesDefault.js
@description: Configura o modulo controller da diretiva pacotesDefault
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/05/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './pacotesDefault.html';
import { RotasDefault } from '../../../api/rotasDefault/collection';

class PacotesDefault {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================
    this.subscribe('users');
    this.subscribe('rotasDefault');
//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
    this.initMouse2 = function(){
      var $pacotesDefault = $('.pacotesDefault');
      var scrollTime = 0.5;
      var scrollDistance = 640;
      $pacotesDefault.on("mousewheel DOMMouseScroll", function(event){
        var delta = event.originalEvent.wheelDelta;
        this.scrollTop -= (delta);
        event.preventDefault();
      });
    }
    this.clickSeuHumor = function () {
      $('.seuHumor').css("visibility", "hidden");
      $('.mapa').css("visibility", "visible");
      $('.pacotesDefault').css("animation-name", "fadeOutRight");
      $('.pacotesDefault').css("-webkit-animation-name", "fadeOutRight");
      $('.pacotesDefault').css("visibility", "hidden");
      $('.mapaContent').css("animation-name", "fadeInRight");
      $('.mapaContent').css("-webkit-animation-name", "fadeInRight");
      $('.mapaContent').css("visibility", "visible");
    }
//============================= METHODS ========================================
//============================= HELPERS ========================================
    this.helpers({
      rotasDefault() {
        return RotasDefault.find({});
      },
      currentUserId() {
        return Meteor.userId();
      }
    });
//============================= HELPERS =END====================================
  }

}


const name = 'pacotesDefault';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: PacotesDefault
});
//============================ MODULE =END======================================
