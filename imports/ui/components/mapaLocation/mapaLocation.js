/** ***************************************************************************

@name: mapaLocation.js
@description: Configura o modulo controller da diretiva pacotesTop
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: MODIFICATION: 25/05/2016

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
    };

    this.carregaMapa = function() {
      var myLatLng = {lat: 40.7141667, lng: -74.0063889};

      var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!',
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
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
