/** ***************************************************************************

NAME: mapaLocation.js
DESCRIPTION: Configura o modulo controller da diretiva pacotesTop
AUTHOR: Gustavo Kluwe Saudade
LAST MODIFICATION: 25/05/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './mapaLocation.html';

class MapaLocation {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================
    this.subscribe('users');
//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
    this.clicaMapa = function() {
      $('.seuHumor').css("visibility", "visible");
      $('.mapa').css("visibility", "hidden");
      $('.pacotesDefault').css("animation-name", "fadeInRight");
      $('.pacotesDefault').css("-webkit-animation-name", "fadeInRight");
      $('.pacotesDefault').css("visibility", "visible");
      $('.mapaContent').css("animation-name", "fadeOutRight");
      $('.mapaContent').css("-webkit-animation-name", "fadeOutRight");
      $('.mapaContent').css("visibility", "hidden");
    }
//============================= METHODS =END====================================
  }
}

const name = 'mapaLocation';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: MapaLocation
});
//============================ MODULE =END======================================
