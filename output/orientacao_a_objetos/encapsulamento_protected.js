"use strict";
class Domicilio {
    cor;
    endereco;
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return 'Interfone tocado!';
    }
    //Acessível apenas dentro da classe, ou classes filhas.
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
//Quando não precisamos criar novos atributos, não é necessário criar o método construtor.
class Casa extends Domicilio {
    teste = this.atenderInterfone('teste');
    entrarNaCasa() {
        return this.atenderInterfone('Oi, quem é?');
    }
}
const casaDoHomer = new Casa('Rosa', { cidade: 'Springfield' });
console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());
console.log(casaDoHomer.teste);
//Não é acessível fora da classe.
//console.log(casaDoHomer.atenderInterfone());
//# sourceMappingURL=encapsulamento_protected.js.map