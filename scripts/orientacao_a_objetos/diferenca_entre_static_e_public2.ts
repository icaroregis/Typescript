// functionario = {
//   nome: string,
//   valorPorHora: number,
//   horasTrabalhadas: number,
// }

class Funcionario {
  constructor(
    public nome: string,
    public valorPorHora: number,
    public horasTrabalhadas: number,
  ) {}

  //Depende dos dados do Objeto instaciado pela classe.
  //O comportamento vai variar dependendo do objeto a qual ele foi chamado.
  //Quando é chamado esse método o resultado dele dependerá dos dados internos do objeto que foi instanciado.
  public valorPago() {
    return this.valorPorHora * this.horasTrabalhadas;
  }
}

const funcionario1 = new Funcionario('Maria', 100, 15);
const funcionario2 = new Funcionario('José', 80, 10);

// console.log(funcionario1.valorPago());
// console.log(funcionario2.valorPago());

class CalculadoraDeSalario {
  //Método de Classe.
  //endereço de memória único.
  //Não Depende dos dados do Objeto instaciado pela classe.
  //Não precisa de nenhum estado interno da classe para ser executado.
  static valorPago(valorPorHora: number, horasTrabalhadas: number) {
    return valorPorHora * horasTrabalhadas;
  }
}

let valorPago1 = CalculadoraDeSalario.valorPago(150, 6);
let valorPago2 = CalculadoraDeSalario.valorPago(180, 10);

console.log(valorPago1);
console.log(valorPago2);
