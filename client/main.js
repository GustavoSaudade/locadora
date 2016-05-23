import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import { name as AppRotas } from '../imports/ui/components/socially/socially';


function onReady() {
  angular.bootstrap(document, [
    AppRotas
  ], {
    strictDi: true
  });


// =========== CARROSSEL IMAGENS DE FUNDO ============
  (function() {
    var bgCounter = 0,
      backgrounds = [
        "cidadeUrbano3.jpg",
         "mochila1.jpg",
         "mochila2.jpg",
         "mochila3.jpeg",
         "mochila4.jpg",
         "mochila5.jpeg",
         "mochila6.jpg",
         "mochila7.jpg",
         "mochila8.jpeg"
      ];

      function changeBackground() {
        bgCounter = (bgCounter+1) % backgrounds.length;
        $('body').css('background', '#000 url('+backgrounds[bgCounter]+') no-repeat center fixed');
        $('body').css('background-size', 'cover');
        setTimeout(changeBackground, 10000);
      }
    changeBackground();
  })();
// =========== CARROSSEL IMAGENS DE FUNDO ============

}



if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
