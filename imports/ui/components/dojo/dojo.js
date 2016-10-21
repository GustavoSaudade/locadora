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
import { name as DetalhesFesta } from '../detalhesFesta/detalhesFesta';
import { name as AdicionaFesta } from '../adicionaFesta/adicionaFesta';

class Dojo {

  constructor($scope, $reactive, $state){
    'ngInject';

    $reactive(this).attach($scope);

    this.menuOpened = false;

    this.openMenu = function() {
      if(this.menuOpened === false){
        $('#menuLateral').css("left", "0%");
        this.menuOpened = true;
      }else if (this.menuOpened === true) {
        $('#menuLateral').css("left", "-42%");
        this.menuOpened = false;
      }
    }

    this.clicaHome = function() {
      $state.go('home');
      this.openMenu();
    }

    this.clicaListaFestas = function() {
      $state.go('listaFestas');
      this.openMenu();
    }

    this.clicaAdicionaFesta = function() {
      $state.go('adicionaFesta');
      this.openMenu();
    }
  }
}

const name = 'dojo';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Home,
  ListaFestas,
  DetalhesFesta,
  AdicionaFesta,
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
            alert('Você precisa logar no sistema para esse super Sistema');
            $state.go('home');
          }
        });
    }
//============================ CONFIG MODULE =END===============================
