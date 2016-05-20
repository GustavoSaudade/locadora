import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './pacotesTop.html';
import { Rotas } from '../../../api/rotas/collection';

class PacotesTop {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('users');

    this.subscribe('rotas');

    this.clicaRota = function(rota) {
      var rotaClicada = rota;
      $('.superContent').css("visibility", "hidden");
      $('.informacoesDaRota').css("visibility", "visible");
      $('.conteudoDaRota').html(rotaClicada.description);
    }

    this.helpers({
      rotas() {
        return Rotas.find({});
      },
      currentUserId() {
        return Meteor.userId();
      }
    });
  }

}


const name = 'pacotesTop';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: PacotesTop
});
