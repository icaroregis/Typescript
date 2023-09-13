function decoratorAttr(target: unknown, nomePropriedade: string) {
  const novoNome = `_${nomePropriedade}`;

  //Target: Nome do objeto que queremos mudar
  //nomePropriedade: Nome da Propriedade que queremos mudar
  Object.defineProperty(target, nomePropriedade, {
    get() {
      return this[novoNome].toUpperCase();
    },
    set(novoValor) {
      this[novoNome] = novoValor.split('').reverse().join('');
    },
  });
}

class Animal {
  @decoratorAttr
  public nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const cachorro = new Animal('Pluto');
cachorro.nome = 'Snoopy';
console.log(cachorro.nome);
