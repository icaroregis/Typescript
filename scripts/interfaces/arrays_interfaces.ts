interface Categoria {
  nome: string;
  id: number;
  categoriaPai?: Categoria;
}

const frontEnd: Categoria = {
  nome: 'Front-End',
  id: 1,
};

const backEnd: Categoria = {
  nome: 'Back-End',
  id: 2,
};

interface Menu {
  categorias: Categoria[];
}

let menu: Menu = {
  categorias: [frontEnd, backEnd],
};

//Quando queremos definir uma interface que seja um array usamos os colchetes e definimos mais duas coisas:
//1. Qual será o índice
//2. E quais Valores desse array.
interface Todo {
  [indice: number]: string | number | boolean | Categoria;
}

let minhasTarefas: Todo;

minhasTarefas = [
  'Estudar TypeScript',
  'Estudar JavaScript',
  'Estudar PHP 8',
  20,
  true,
  frontEnd,
  {
    nome: 'JavaScript',
    id: 3,
    categoriaPai: frontEnd,
  },
];

console.log(minhasTarefas[0]);
