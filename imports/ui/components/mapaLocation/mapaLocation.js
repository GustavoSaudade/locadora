/** ***************************************************************************

@name: mapaLocation.js
@description: Configura o modulo controller da diretiva pacotesTop
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: MODIFICATION: 28/06/2016
to use in html = <mapa-location></mapa-location>

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './mapaLocation.html';

class MapaLocation {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.disableLatitudeButton = true;
    this.localizacao = {};
    this.adress;
//============================= SUBSCRIBES =====================================
    this.subscribe('users');
//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
    this.informarMeuLocal = function() {
      $('#map').css('width', '50%');
      $('#map').css('left', '45%');
      $('.formInformarMeuLocal').css('opacity', '1');
    };

    this.buscar = function() {
      var localizacaoAtual = this.localizacao;

      var myLatLng = {lat: localizacaoAtual.latitude, lng: localizacaoAtual.longitude};

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

    this.buscarEndereco = function() {
      var geocoder;
      var map;
      var myLatLng = {lat: 40.7141667, lng: -74.0063889};

      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng
      });

      geocoder = new google.maps.Geocoder();
      var address = this.adress;

      geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });

    }

    this.openSearchMeuLocal = function() {
      $('.coberturaMeuLocal').css('-webkit-animation-name','fadeOutLeft');
      $('.coberturaMeuLocal').css('animation-name','fadeOutLeft');
      $('.coberturaMeuLocal').css('-webkit-animation-duration','1s');
      $('.coberturaMeuLocal').css('animation-duration','1s');
      $('.coberturaMeuLocal').css('opacity','0');
      $('.coberturaMeuLocal').css('z-index','0');
      $('.coberturaMeuLocalLatitude').css('opacity','1');
      $('.coberturaMeuLocalLatitude').css('z-index','800');
    }

    this.coberturaMeuLocalLatitude = function() {
      $('.coberturaMeuLocalLatitude').css('-webkit-animation-name','fadeOutLeft');
      $('.coberturaMeuLocalLatitude').css('animation-name','fadeOutLeft');
      $('.coberturaMeuLocalLatitude').css('-webkit-animation-duration','1s');
      $('.coberturaMeuLocalLatitude').css('animation-duration','1s');
      $('.coberturaMeuLocalLatitude').css('opacity','0');
      $('.coberturaMeuLocalLatitude').css('z-index','0');
      $('.coberturaMeuLocal').css('opacity','1');
      $('.coberturaMeuLocal').css('z-index','800');
    }

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
