class Permissao {
  constructor(private _nome: string, private _nivel: number) {}

  get nome() {
    return this._nome.toUpperCase();
  }

  //no set não pode haver return, porque ele apenas altera um dado e não retorna.
  set nome(novoNome: string) {
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
} catch (e: any) {
  console.log(e.message);
}

console.log(permissao.nome);
