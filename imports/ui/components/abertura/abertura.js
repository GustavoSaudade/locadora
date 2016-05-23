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
