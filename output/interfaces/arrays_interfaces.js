"use strict";
const frontEnd = {
    nome: 'Front-End',
    id: 1,
};
const backEnd = {
    nome: 'Back-End',
    id: 2,
};
let menu = {
    categorias: [frontEnd, backEnd],
};
let minhasTarefas;
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
//# sourceMappingURL=arrays_interfaces.js.map