/** ***************************************************************************

@name: dojo.js
@description: Modulo principal da Aplicação
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 17/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


import './dojo.html';
import { name as Home } from '../home/home';
import { name as ListaFestas } from '../listaFestas/listaFestas';

class Dojo {}

const name = 'dojo';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Home,
  ListaFestas,
  'accounts.ui'
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: Dojo
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
