import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import './home.html';
import { name as PacotesTop } from '../pacotesTop/pacotesTop';
import { name as PacotesDefault } from '../pacotesDefault/pacotesDefault';

class Home {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    Meteor.subscribe('users');
    Meteor.subscribe('rotas');

    this.clickSearch = function() {
      $('.modalSearch').css("visibility", "visible");
    }

    this.closeSearch = function() {
      $('.modalSearch').css("visibility", "hidden");
    }

    this.closeRotaDetail = function() {
      $('.informacoesDaRota').css("visibility", "hidden");
      $('.superContent').css("visibility", "visible");
    }

    if (Meteor.isClient) {
      $(function(){
          var $pacotesTopRanking = $('.pacotesTopRanking');
          var scrollTime = 0.5;
          var scrollDistance = 640;
          $pacotesTopRanking.on("mousewheel DOMMouseScroll", function(event){
            var delta = event.originalEvent.wheelDelta;
            this.scrollLeft -= (delta);
            event.preventDefault();
          });
        });

        $(function(){
            var $pacotesDefault = $('.pacotesDefault');
            var scrollTime = 0.5;
            var scrollDistance = 640;
            $pacotesDefault.on("mousewheel DOMMouseScroll", function(event){
              var delta = event.originalEvent.wheelDelta;
              this.scrollTop -= (delta);
              event.preventDefault();
            });
          });
    }
  }
}

const name = 'home';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagination,
  PacotesTop,
  PacotesDefault
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
