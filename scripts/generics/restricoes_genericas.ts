//A propriedade length não existia na função ciramos uma interface e extendemos um tipo genérico.

interface IHcode {
  length: number;
}

function mostrarQuantidadeTotal<T extends IHcode>(valor: T): T {
  console.log(`Total: ${valor.length}`);

  return valor;
}

console.log(mostrarQuantidadeTotal([10, 20]));
console.log(mostrarQuantidadeTotal({ nome: 'Ronaldo', length: 1 }));
