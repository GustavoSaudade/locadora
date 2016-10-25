/** ***************************************************************************

@name: partyRsvp.js
@description: Modulo para responder ao convite para a festa
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/10/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './partyRsvp.html';

class PartyRsvp {

  constructor($scope, $reactive){
    'ngInject';

    $reactive(this).attach($scope);

    this.yes = function() {
      this.answer('yes');
    }

    this.maybe = function() {
      this.answer('maybe');
    }

    this.no = function() {
      this.answer('no');
    }

    this.answer = function(answer) {
      Meteor.call('rsvp', this.festa._id, answer, (error) => {
        if (error) {
          console.error('Oops, unable to rsvp!');
        } else {
          console.log('RSVP done!')
        }
      });
    }

  }
}

const name = 'partyRsvp';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    bindings: {
      festa: '<'
    },
    controller: PartyRsvp
  })
    .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
    function config($locationProvider, $urlRouterProvider) {
      'ngInject';
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/home');
    }

//============================ CONFIG MODULE =END===============================
