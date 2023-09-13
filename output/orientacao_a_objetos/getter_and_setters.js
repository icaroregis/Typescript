"use strict";
class Permissao {
    _nome;
    _nivel;
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    //no set não pode haver return, porque ele apenas altera um dado e não retorna.
    set nome(novoNome) {
        if (novoNome.length < 5) {
            throw new Error('O nome da permissão deve ter no máximo 5 letras');
        }
        this._nome = novoNome;
    }
}
const permissao = new Permissao('Administrador', 1);
//nos métodos get e set não se executa apenas chama-se como uma propriedade da classe
//método get
console.log(permissao.nome);
try {
    //método set
    permissao.nome = 'adm';
}
catch (e) {
    console.log(e.message);
}
console.log(permissao.nome);
//# sourceMappingURL=getter_and_setters.js.map