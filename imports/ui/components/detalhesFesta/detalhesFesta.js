import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Festas } from '../../../api/festas';
import { name as FestaNaoConvidados } from '../festaNaoConvidados/festaNaoConvidados';
import { name as DisplayNameFilter } from '../../filters/displayNameFilter';

import './detalhesFesta.html';

class DetalhesFesta {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    $reactive(this).attach($scope);
    this.subscribe('festas');
    this.subscribe('users');

    this.festaId = $stateParams.festaId;

    this.helpers({
      festa() {
        return Festas.findOne({
          _id: $stateParams.festaId
        });
      },
      users() {
        return Meteor.users.find({});
      }
    });

    this.save = function() {
      Festas.update({_id: this.festa._id},
        {
          $set: {
            name: this.festa.name,
            description: this.festa.description,
            public: this.festa.public
            }
          },
        (error) => {
          if (error) {
            console.log('Oops, unable to update the party...');
          } else {
            console.log('Festa sofreu update com sucesso!');
          }
        });
      }
    }
}
const name = 'detalhesFesta';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  FestaNaoConvidados,
  DisplayNameFilter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: DetalhesFesta
})
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('detalhesFesta', {
    url: '/detalhesFesta/:festaId',
    template: '<detalhes-festa></detalhes-festa>',
    resolve: {
      currentUser($q) {
        if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
  });
}
