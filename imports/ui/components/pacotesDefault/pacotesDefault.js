import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './pacotesDefault.html';
import { Rotas } from '../../../api/rotas/collection';

class PacotesDefault {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('users');

    this.subscribe('rotas');

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


const name = 'pacotesDefault';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: PacotesDefault
});
