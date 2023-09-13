// Em TypeScript, os decorators são uma característica que permite adicionar metadados a classes, métodos, propriedades e parâmetros de funções. Os decorators são anotações que podem ser usadas para estender ou modificar o comportamento de classes ou elementos específicos do código. Eles são marcados com o símbolo @ seguido de um identificador, como @decoratorName.

import { debug, log } from './utils';

@debug
class PrimeiraClasse {
  constructor() {}
}

@log
class SegundaClasse {
  constructor() {}
}

console.log(new PrimeiraClasse());
console.log(new SegundaClasse());
