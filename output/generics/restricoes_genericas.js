"use strict";
//A propriedade length não existia na função ciramos uma interface e extendemos um tipo genérico.
function mostrarQuantidadeTotal(valor) {
    console.log(`Total: ${valor.length}`);
    return valor;
}
console.log(mostrarQuantidadeTotal([10, 20]));
console.log(mostrarQuantidadeTotal({ nome: 'Ronaldo', length: 1 }));
//# sourceMappingURL=restricoes_genericas.js.map