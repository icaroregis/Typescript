"use strict";
class NotificacaoV2 {
}
class EmailV2 extends NotificacaoV2 {
    nome;
    email;
    constructor(usuario) {
        //Toda Classe que extende de outra classe e essa classe atual tenha um construtor precisamos chamar o método super.
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`Enviando e-mail para o usuario ${this.email} ...`);
        return true;
    }
}
class SMSV2 extends NotificacaoV2 {
    numero;
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar() {
        console.log(`Enviando SMS para o usuario ${this.numero} ...`);
        return true;
    }
}
new EmailV2({
    nome: 'Joao',
    email: 'joao@hcode.com.br',
    telefone: '11912344321',
}).enviar();
new SMSV2({
    nome: 'Joao',
    email: 'joao@hcode.com.br',
    telefone: '11912344321',
}).enviar();
//# sourceMappingURL=classes_abstratas.js.map