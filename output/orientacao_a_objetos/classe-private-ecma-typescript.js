"use strict";
class Documento {
    valor = '1236544789-01'; // TS
    #numero = 35; // ECMAScript
    mostrarDocumento() {
        return this.#numero;
    }
}
class CNPJ extends Documento {
    // private valor: string = "25698745632-01";
    #numero = 50;
    mostrarCNPJ() {
        return this.#numero;
    }
}
const rg = new Documento();
console.log(rg.mostrarDocumento());
const cnpj = new CNPJ();
console.log(cnpj.mostrarCNPJ());
//console.log("RG:" + rg.valor);
//console.log("RG:" + rg.#numero);
//# sourceMappingURL=classe-private-ecma-typescript.js.map