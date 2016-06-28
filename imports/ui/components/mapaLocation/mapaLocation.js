/** ***************************************************************************

@name: mapaLocation.js
@description: Configura o modulo controller da diretiva pacotesTop
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: MODIFICATION: 25/05/2016
to use in html = <mapa-location></mapa-location>

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
    this.informarMeuLocal = function() {
      $('#map').css('width', '50%');
      $('#map').css('left', '45%');
      $('.formInformarMeuLocal').css('opacity', '1');
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
}).config(config);
//============================ MODULE =END======================================
function config($stateProvider) {
'ngInject';
$stateProvider
  .state('mapaLocation', {
    url: '/mapaLocation',
    template: '<mapa-location></mapa-location>'
  });
}
