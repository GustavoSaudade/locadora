/** ***************************************************************************

@name: home.js
@description: Modulo controller da pagina home
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 17/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import angularMaterialExpansionPanel from 'angular-material-expansion-panel';
import { name as ListaFestas } from '../listaFestas/listaFestas';

import './home.html';

class Home {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

//============================= SUBSCRIBES =====================================
    this.subscribe('users');
//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================
    this.isOpen = false;
//============================= HELPERS =END====================================

//============================= METHODS ========================================
    this.init = function(){
      setTimeout(function(){
        $('#textoBoasVindas').css("opacity","1");
      }, 100);
    }

    this.mais = function() {
      $('#textoBoasVindas').css("opacity","0");
      $('#textoBoasVindas2').css("opacity","1");
    }

    this.clickTest = function(){
      if(this.isOpen === false){
          this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    }

//============================= METHODS =END====================================
  }
}

const name = 'home';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  'material.components.expansionPanels',
  ListaFestas
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Home
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
function config($stateProvider) {
  'ngInject';

  $stateProvider.state('home', {
    url: '/home',
    template: '<home></home>'
  });


}
//============================ CONFIG MODULE =END===============================
