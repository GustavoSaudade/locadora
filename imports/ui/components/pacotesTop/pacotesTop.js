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

    this.carregaImagem = function() {
      //$('.caixinha').css("background", "url('http://i67.tinypic.com/23hva8j.png') no-repeat center center");
      //$('.caixinha').css("background-size", "100% 100%");
      //$('.caixinha').css("-o-background-size", "100% 100%");
      //$('.caixinha').css("-webkit-background-size", "100% 100%");
      //$('.caixinha').css("-moz-background-size", "100% 100%");
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
