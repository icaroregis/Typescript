"use strict";
class Cadastro {
    nome;
    nascimento;
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
    nomeCompleto() {
        this.nome;
    }
}
class Cliente extends Cadastro {
    email;
    empresa;
    constructor(nome, nascimento, email, empresa) {
        //O super serve para reaproveitar o constructor da classe pai.
        //O super sempre deve ser chamado por primeiro dentro do construtor.
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
    nomeCompleto() {
        super.nomeCompleto() + ' Régis ';
    }
}
const clienteJoao = new Cliente('Joao', new Date('2000-01-01'), 'joao@hcode.com.br', 'Hcode');
console.log(clienteJoao);
//# sourceMappingURL=heranca.js.map