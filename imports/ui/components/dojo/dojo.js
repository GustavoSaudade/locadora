/** ***************************************************************************

@name: dojo.js
@description: Modulo principal da Aplicação
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 17/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import angularMaterialExpansionPanel from 'angular-material-expansion-panel';
import angAccordion from 'ang-accordion';

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
  ngMaterial,
  'angAccordion',
  'material.components.expansionPanels',
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
    function config($locationProvider, $urlRouterProvider, $mdIconProvider) {
      'ngInject';
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/home');

      const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
      $mdIconProvider
    .iconSet('social',
      iconPath + 'svg-sprite-social.svg')
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
    .iconSet('communication',
      iconPath + 'svg-sprite-communication.svg')
    .iconSet('content',
      iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle',
      iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation',
      iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image',
      iconPath + 'svg-sprite-image.svg');
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
