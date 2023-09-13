// Atributos e métodos privados são os mais restritos. Eles
// podem ser acessados ou alterados apenas por meio da classe
// em que foram criados
class Banco {
  private cofreQtd: number = 10000;

  private debitarCofre(quantidade: number): number | string {
    if (this.cofreQtd >= quantidade) {
      this.cofreQtd = this.cofreQtd - quantidade;

      return this.cofreQtd;
    } else {
      return 'O cofre não possui a quantidade requisitada';
    }
  }

  protected sacarDoCaixa(quantidade: number) {
    return this.debitarCofre(quantidade);
  }

  public sacarDoCaixaEletronico(quantidade: number) {
    return this.debitarCofre(quantidade);
  }
}

class Banco24Horas extends Banco {
  public sacar(qtd: number) {
    return this.sacarDoCaixa(qtd);
  }
}

const nubank = new Banco();
const banco24horas = new Banco24Horas();

banco24horas.sacar(2500);
nubank.sacarDoCaixaEletronico(200);
