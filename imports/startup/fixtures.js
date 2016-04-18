import { Meteor } from 'meteor/meteor';
import { Rotas } from '../api/rotas';


Meteor.startup(() => {
  if (Rotas.find().count() === 0) {
    const rotas = [{
      'name': 'Rota Teste 1',
      'description': 'Primeira rota de testes'
    }, {
      'name': 'Rota Teste 2',
      'description': 'Segunda Rota de teste'
    }, {
      'name': 'Rota Teste 3',
      'description': 'Terceira rota de teste'
    }];

    rotas.forEach((rota) => {
      Rotas.insert(rota)
    });
  }
});
