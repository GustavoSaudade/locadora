import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './abertura.html';


class Abertura {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('users');

    this.helpers({
      users() {
        return Meteor.users.find({});
      }
    });

    this.clicaWorld = function() {
      alert("Você clicou no mundo!");
    }

    this.clicaFriends = function() {
      alert("Você clicou em Frinds!");
    }

    this.clicaMyRoutes = function() {
      alert("Você clicou em My Routes!");
    }

    this.clicaFind = function() {
      alert("Você clicou em Find!");
    }

    this.clicaBackArrow = function() {
      alert("Você clicou em Back Arrow!");
    }

  }
}

const name = 'abertura';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Abertura
})
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('abertura', {
    url: '/abertura',
    template: '<abertura></abertura>'
  });
}
