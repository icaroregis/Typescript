"use strict";
// functionario = {
//   nome: string,
//   valorPorHora: number,
//   horasTrabalhadas: number,
// }
class Funcionario {
    nome;
    valorPorHora;
    horasTrabalhadas;
    constructor(nome, valorPorHora, horasTrabalhadas) {
        this.nome = nome;
        this.valorPorHora = valorPorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    //Depende dos dados do Objeto instaciado pela classe.
    //O comportamento vai variar dependendo do objeto a qual ele foi chamado.
    //Quando é chamado esse método o resultado dele dependerá dos dados internos do objeto que foi instanciado.
    valorPago() {
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
    static valorPago(valorPorHora, horasTrabalhadas) {
        return valorPorHora * horasTrabalhadas;
    }
}
let valorPago1 = CalculadoraDeSalario.valorPago(150, 6);
let valorPago2 = CalculadoraDeSalario.valorPago(180, 10);
console.log(valorPago1);
console.log(valorPago2);
//# sourceMappingURL=diferenca_entre_static_e_public2.js.map