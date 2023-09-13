// Um tipo genérico em TypeScript permite que você escreva funções, classes ou interfaces que podem trabalhar com diferentes tipos de dados sem especificar o tipo exato antecipadamente. Isso torna seu código mais flexível e reutilizável.

// Reutilização de código: Use tipos genéricos quando desejar criar funções, classes ou interfaces que possam ser usadas com diferentes tipos de dados. Isso permite que você escreva código mais genérico e reutilizável.

function retornaPrimeiroElemento<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

const numeros: number[] = [1, 2, 3, 4, 5];
const primeiroNumero: number | undefined = retornaPrimeiroElemento(numeros);

const nomes: string[] = ['Alice', 'Bob', 'Charlie'];
const primeiroNome: string | undefined = retornaPrimeiroElemento(nomes);
