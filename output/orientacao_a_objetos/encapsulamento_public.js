"use strict";
//Podem ser acessados ou alterados por qualquer classe.
//Por padrão o constructor, atributos e métodos já são publics.
class Veiculo {
    cor;
    constructor(cor) {
        this.cor = cor;
    }
    tentarAbrirPorta() {
        return false;
    }
}
const carro = new Veiculo('Branco');
carro.cor = 'Preto';
console.log(carro.cor);
console.log(carro.tentarAbrirPorta());
//# sourceMappingURL=encapsulamento_public.js.map