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
  constructor($scope, $reactive, notificationService) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================
    this.subscribe('users');
    this.subscribe('rotasDefault');
//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
    //configura efeito de rolagem
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
      $('.atividadeDosAmigos').css("visibility", "visible");
      $('.pacotesDefault').css("animation-name", "fadeOutRight");
      $('.pacotesDefault').css("-webkit-animation-name", "fadeOutRight");
      $('.pacotesDefault').css("visibility", "hidden");
      $('.listaAtividadeDosAmigos').css("animation-name", "fadeInRight");
      $('.listaAtividadeDosAmigos').css("-webkit-animation-name", "fadeInRight");
      $('.listaAtividadeDosAmigos').css("visibility", "visible");
    }

    this.clicaMapa = function () {
      $('.seuHumor').css("visibility", "visible");
      $('.atividadeDosAmigos').css("visibility", "hidden");
      $('.pacotesDefault').css("animation-name", "fadeInRight");
      $('.pacotesDefault').css("-webkit-animation-name", "fadeInRight");
      $('.pacotesDefault').css("visibility", "visible");
      $('.listaAtividadeDosAmigos').css("animation-name", "fadeOutRight");
      $('.listaAtividadeDosAmigos').css("-webkit-animation-name", "fadeOutRight");
      $('.listaAtividadeDosAmigos').css("visibility", "hidden");
    }

    this.clicaAtividadeAmigo = function () {
      notificationService.prompt3({
        title: "ATIVIDADE DO AMIGO",
        modifier: true,
        callback: function() {
          ons.notification.alert({
            message: 'esse é o callback!',
            modifier: true
          });
        }
      });
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
