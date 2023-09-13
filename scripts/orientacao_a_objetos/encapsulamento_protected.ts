class Domicilio {
  public cor: string;
  public endereco: object;

  constructor(cor: string, endereco: object) {
    this.cor = cor;
    this.endereco = endereco;
  }

  public tocarInterfone(): string {
    return 'Interfone tocado!';
  }

  //Acessível apenas dentro da classe, ou classes filhas.
  protected atenderInterfone(mensagem: string): string {
    return mensagem;
  }
}

//Quando não precisamos criar novos atributos, não é necessário criar o método construtor.
class Casa extends Domicilio {
  public teste = this.atenderInterfone('teste');

  public entrarNaCasa() {
    return this.atenderInterfone('Oi, quem é?');
  }
}

const casaDoHomer = new Casa('Rosa', { cidade: 'Springfield' });

console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());
console.log(casaDoHomer.teste);
//Não é acessível fora da classe.
//console.log(casaDoHomer.atenderInterfone());
