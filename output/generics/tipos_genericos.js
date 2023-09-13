"use strict";
// Um tipo genérico em TypeScript permite que você escreva funções, classes ou interfaces que podem trabalhar com diferentes tipos de dados sem especificar o tipo exato antecipadamente. Isso torna seu código mais flexível e reutilizável.
// Reutilização de código: Use tipos genéricos quando desejar criar funções, classes ou interfaces que possam ser usadas com diferentes tipos de dados. Isso permite que você escreva código mais genérico e reutilizável.
function retornaPrimeiroElemento(array) {
    return array.length > 0 ? array[0] : undefined;
}
const numeros = [1, 2, 3, 4, 5];
const primeiroNumero = retornaPrimeiroElemento(numeros);
const nomes = ['Alice', 'Bob', 'Charlie'];
const primeiroNome = retornaPrimeiroElemento(nomes);
//# sourceMappingURL=tipos_genericos.js.map