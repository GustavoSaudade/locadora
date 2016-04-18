import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import './home.html';
import { name as PacotesTop } from '../pacotesTop/pacotesTop';

class Home {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    Meteor.subscribe('users');
    Meteor.subscribe('rotas');
  }
}

const name = 'home';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagination,
  PacotesTop
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Home
})
  .config(config);

  function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
}
