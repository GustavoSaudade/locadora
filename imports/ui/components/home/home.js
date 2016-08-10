/** ***************************************************************************

@name: home.js
@description: Modulo controller da pagina home
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 10/08/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './home.html';


class Home {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    $scope.sizes = [
          "small (12-inch)",
          "medium (14-inch)",
          "large (16-inch)",
          "insane (42-inch)"
      ];

      $scope.toppings = [
        { category: 'meat', name: 'Pepperoni' },
        { category: 'meat', name: 'Sausage' },
        { category: 'meat', name: 'Ground Beef' },
        { category: 'meat', name: 'Bacon' },
        { category: 'veg', name: 'Mushrooms' },
        { category: 'veg', name: 'Onion' },
        { category: 'veg', name: 'Green Pepper' },
        { category: 'veg', name: 'Green Olives' }
      ];
      $scope.selectedToppings = [];
      $scope.printSelectedToppings = function printSelectedToppings() {
        var numberOfToppings = this.selectedToppings.length;
        // If there is more than one topping, we add an 'and'
        // to be gramatically correct. If there are 3+ toppings
        // we also add an oxford comma.
        if (numberOfToppings > 1) {
          var needsOxfordComma = numberOfToppings > 2;
          var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
          var lastTopping = lastToppingConjunction +
              this.selectedToppings[this.selectedToppings.length - 1];
          return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
        }
        return this.selectedToppings.join('');
      };


//============================= SUBSCRIBES =====================================
    this.subscribe('users');
//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================
    this.helpers({
      users() {
        return Meteor.users.find({});
      }
    });
//============================= HELPERS =END====================================

//============================= METHODS ========================================

//============================= METHODS =END====================================
  }
}

const name = 'home';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter
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
