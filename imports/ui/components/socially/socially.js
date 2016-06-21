/** ***************************************************************************

@name: socially.js
@description: Modulo principal da Aplicação
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/05/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import './socially.html';
import '../../../Services/notificationAlertView.html';
import '../../../Services/notificationPromptView.html';
import '../../../Services/notificationPrompt2View.html';
import '../../../Services/notificationPrompt3View.html';
import { name as Home } from '../home/home';
import { name as Abertura } from '../abertura/abertura';




//import { name as PartyDetails } from '../partyDetails/partyDetails';
//import { name as Navigation } from '../navigation/navigation';


class Socially {}

const name = 'socially';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagination,
  Home,
  Abertura,
  'onsen',
  'accounts.ui'
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: Socially
  })
    .config(config)
    .run(run)

    /**
    * Servico de notificacao do dispositivo.
    */
    .factory('notificationService', ['$rootScope', function ($rootScope) {

      return {

        /**
        * Mostra uma mensagem para o usuario.
        * @message(Object)
        *      + message(String): a mensagem a ser exibida para o usuário.
        *      + callback(Function): uma função a ser executada quando fechar a mensagem.
        *      + title(String): o titulo da mensagem.
        *      + buttonLabel(String): o texto do botão.
        */
        alert: function (params) {

          $rootScope.alertOptions = {
            message: '',
            title: '',
            modifier: '',
            callback: function () {}
          };

          angular.extend($rootScope.alertOptions, params);

          $rootScope.ons.createAlertDialog('imports/Services/notificationAlertView.html').then(function(alertDialog) {

            alertDialog.close = function () {

              if ($rootScope.alertOptions.callback) {
                $rootScope.alertOptions.callback();
                alertDialog._cancel();
              }
              else {
                alertDialog._cancel();
              }
            };

            alertDialog.show();
          });
        },

        /**
        * Mostra uma questão para o usuario.
        * @params(Object)
        *      + message(String): a mensagem a ser exibida para o usuário.
        *      + callback(Function): uma função a ser executada quando confirmar.
        *      + title(String): o titulo da mensagem.
        *      + buttonLabels(Array): ['NomeBotaoCancelar', 'NomeBotaoOk'].
        */
        confirm: function (params) {

          $rootScope.confirmOptions = {
            message: '',
            title: 'Confirm',
            callback: function () {},
            modifier: ''
          };

          angular.extend($rootScope.confirmOptions, params);

          $rootScope.ons.createAlertDialog('imports/Services/notificationAlertView.html').then(function(confirmDialog) {

            confirmDialog.submit = function () {

              var callback = $rootScope.confirmOptions.callback;

              if (callback) {
                callback();
                confirmDialog._cancel();
                $rootScope.confirmOptions = {};
              }
            };

            confirmDialog.show();
          });
        },

        /**
        * Mostra um prompt para o usuario.
        * @params(Object)
        *      + message(String): a mensagem a ser exibida para o usuário.
        *      + callback(Function): uma função a ser executada quando confirmar.
        *      + title(String): o titulo da mensagem.
        *      + buttonLabels(Array): ['NomeBotaoCancelar', 'NomeBotaoOk'].
        */
        prompt: function (params) {

          $rootScope.invalidPrompt = false;

          $rootScope.promptOptions = {
            message: '',
            title: 'Prompt',
            messageValidation: '',
            callback: function () {},
            validators: [],
            cancelable: true,
            modifier: ''
          };

          angular.extend($rootScope.promptOptions, params);

          $rootScope.ons.createAlertDialog('imports/Services/notificationPromptView.html').then(function(promptDialog) {

            promptDialog.submit = function () {

              var value = $rootScope.promptOptions.value;

              if (!angular.isDefined(value) || value.trim().length < 1) {
                $rootScope.invalidPrompt = true;
                return;
              }

              var validators = $rootScope.promptOptions.validators;
              var validated = true;

              if (validators.length > 0) {
                validators.forEach(function (validator){
                  if (!validator(value)) {
                    validated = false;
                    return;
                  }
                });
              }

              if (!validated) {
                $rootScope.invalidPrompt = true;
                return;
              }

              $rootScope.invalidPrompt = false;

              var callback = $rootScope.promptOptions.callback;

              if (callback) {
                callback(value);
                promptDialog._cancel();
                $rootScope.promptOptions = {};
              }
            };

            promptDialog.show();
          });
    },

    /**
    * Mostra um prompt epecífica para o detalhamento de Rotas.
    * @params(Object)
    *      + message(String): a mensagem a ser exibida para o usuário.
    *      + callback(Function): uma função a ser executada quando confirmar.
    *      + title(String): o titulo da mensagem.
    *      + buttonLabels(Array): ['NomeBotaoCancelar', 'NomeBotaoOk'].
    */
    prompt2: function (params) {

      $rootScope.invalidPrompt = false;

      $rootScope.promptOptions = {
        message: '',
        title: 'Prompt',
        messageValidation: '',
        callback: function () {},
        validators: [],
        cancelable: true,
        modifier: ''
      };

      angular.extend($rootScope.promptOptions, params);

      $rootScope.ons.createAlertDialog('imports/Services/notificationPrompt2View.html').then(function(promptDialog) {

        promptDialog.submit = function () {

          var value = $rootScope.promptOptions.value;

          if (!angular.isDefined(value) || value.trim().length < 1) {
            $rootScope.invalidPrompt = true;
            return;
          }

          var validators = $rootScope.promptOptions.validators;
          var validated = true;

          if (validators.length > 0) {
            validators.forEach(function (validator){
              if (!validator(value)) {
                validated = false;
                return;
              }
            });
          }

          if (!validated) {
            $rootScope.invalidPrompt = true;
            return;
          }

          $rootScope.invalidPrompt = false;

          var callback = $rootScope.promptOptions.callback;

          if (callback) {
            callback(value);
            promptDialog._cancel();
            $rootScope.promptOptions = {};
          }
        };

        promptDialog.show();
      });
    },


    /**
    * Mostra um prompt epecífica para a Atividade do Amigo.
    * @params(Object)
    *      + message(String): a mensagem a ser exibida para o usuário.
    *      + callback(Function): uma função a ser executada quando confirmar.
    *      + title(String): o titulo da mensagem.
    *      + buttonLabels(Array): ['NomeBotaoCancelar', 'NomeBotaoOk'].
    */
    prompt3: function (params) {

      $rootScope.invalidPrompt = false;

      $rootScope.promptOptions = {
        message: '',
        title: 'Prompt',
        messageValidation: '',
        callback: function () {},
        validators: [],
        cancelable: true,
        modifier: ''
      };

      angular.extend($rootScope.promptOptions, params);

      $rootScope.ons.createAlertDialog('imports/Services/notificationPrompt3View.html').then(function(promptDialog) {

        promptDialog.submit = function () {
          var callback = $rootScope.promptOptions.callback;
          if (callback) {
            callback(value);
            promptDialog._cancel();
            $rootScope.promptOptions = {};
          }
        };
        promptDialog.show();
      });
    }
  };
    }]);

//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
    function config($locationProvider, $urlRouterProvider) {
      'ngInject';
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/abertura');
    }

    function run($rootScope, $state) {
      'ngInject';
      $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
          if (error === 'AUTH_REQUIRED') {
            alert('Você precisa logar no sistema para visualizar as Rotas');
            $state.go('abertura');
          }
        });
    }
//============================ CONFIG MODULE =END===============================
