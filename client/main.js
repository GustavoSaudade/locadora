import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import { name as App } from '../imports/ui/components/galvaoLocadora/galvaoLocadora';


function onReady() {
  angular.bootstrap(document, [
    App
  ], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
