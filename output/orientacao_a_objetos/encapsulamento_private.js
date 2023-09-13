"use strict";
// Atributos e métodos privados são os mais restritos. Eles
// podem ser acessados ou alterados apenas por meio da classe
// em que foram criados
class Banco {
    cofreQtd = 10000;
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd = this.cofreQtd - quantidade;
            return this.cofreQtd;
        }
        else {
            return 'O cofre não possui a quantidade requisitada';
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24Horas extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const nubank = new Banco();
const banco24horas = new Banco24Horas();
banco24horas.sacar(2500);
nubank.sacarDoCaixaEletronico(200);
//# sourceMappingURL=encapsulamento_private.js.map