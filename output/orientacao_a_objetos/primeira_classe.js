"use strict";
class Pessoa {
    //atributos
    nome;
    idade;
    altura;
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    //métodos
    mostrarNoConsole(param) {
        console.log(`${param}`);
    }
    toString() {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura.`;
    }
}
const ronaldo = new Pessoa('Ronaldo Braz', 30, 1.85);
const marcus = new Pessoa('Marcus Ribeiro', 19, 2);
ronaldo.nome = 'Ronaldo';
console.log('Pessoa: ' + ronaldo);
console.log('Pessoa: ' + marcus);
//# sourceMappingURL=primeira_classe.js.map