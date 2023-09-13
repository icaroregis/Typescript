//example with type null. O type null é usado geralmente com o type union type.
let valor: null;
valor = null;

const elemento: HTMLHeadingElement | null = document.querySelector('h2');

//example with type undefined
//undefined => ainda não teve o seu valor definido.
//null => ausência de valor.
let minhaVariavel: string | undefined;

if (new Date().getDate() === 5) {
  minhaVariavel = 'Hoje é o dia 5';
}
