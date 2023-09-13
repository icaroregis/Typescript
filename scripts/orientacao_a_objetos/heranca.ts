class Cadastro {
  nome: string;
  nascimento: Date;

  constructor(nome: string, nascimento: Date) {
    this.nome = nome;
    this.nascimento = nascimento;
  }

  nomeCompleto() {
    this.nome;
  }
}

class Cliente extends Cadastro {
  email: string;
  empresa: string;

  constructor(nome: string, nascimento: Date, email: string, empresa: string) {
    //O super serve para reaproveitar o constructor da classe pai.
    //O super sempre deve ser chamado por primeiro dentro do construtor.
    super(nome, nascimento);
    this.email = email;
    this.empresa = empresa;
  }

  nomeCompleto() {
    super.nomeCompleto() + ' Régis ';
  }
}

const clienteJoao = new Cliente(
  'Joao',
  new Date('2000-01-01'),
  'joao@hcode.com.br',
  'Hcode',
);

console.log(clienteJoao);
