//construtor no modo tradicional
// class Pedido {
//   private produto: string;
//   protected valorTotal: number;
//   public previsaoEntrega: Date;

//   constructor(produto: string, valorTotal: number, previsaoEntrega: Date) {
//     this.produto = produto;
//     this.valorTotal = valorTotal;
//     this.previsaoEntrega = previsaoEntrega;
//   }
// }

// construtor no modo simplificado
class Pedido {
  constructor(
    private produto: string,
    protected valorTotal: number,
    public previsaoEntrega: Date,
  ) {}
}

const meuPedido = new Pedido('TV 64 polegadas', 2000, new Date('2021-05-01'));

console.log(meuPedido);
