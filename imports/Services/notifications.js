import { Meteor } from 'meteor/meteor';
import { AppRotas } from '../ui/components/socially/socially';

AppRotas.factory('notificationService', ['$rootScope', function ($rootScope) {

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

      $rootScope.ons.createAlertDialog('imports/Services/notificationAlertView.html').then(function(promptDialog) {

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
}
};
}]);
