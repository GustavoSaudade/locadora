/** ***************************************************************************

@name: galvaoLocadora.js
@description: Modulo principal da Aplicação
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 10/08/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


import './galvaoLocadora.html';
import { name as Home } from '../home/home';

class GalvaoLocadora {}

const name = 'galvaoLocadora';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Home,
  'accounts.ui'
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: GalvaoLocadora
  })
    .config(config)
    .run(run);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
    function config($locationProvider, $urlRouterProvider) {
      'ngInject';
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/home');

    }

    function run($rootScope, $state) {
      'ngInject';
      $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
          if (error === 'AUTH_REQUIRED') {
            alert('Você precisa logar no sistema para visualizar as Rotas');
            $state.go('home');
          }
        });
    }
//============================ CONFIG MODULE =END===============================
