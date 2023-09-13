//Neste código, estamos definindo uma classe chamada BancoDeDados2 que possui uma propriedade pública de instância chamada LOCAL. Isso significa que cada instância criada a partir dessa classe terá sua própria cópia da propriedade LOCAL. Cada objeto criado a partir dessa classe pode ter um valor diferente para LOCAL.

class ClasseComPropriedade {
  public LOCAL = '127.0.0.1';
}

const instancia1 = new ClasseComPropriedade();
const instancia2 = new ClasseComPropriedade();
const instancia3 = new ClasseComPropriedade();

//Neste exemplo, as duas instâncias têm valores diferentes para LOCAL porque cada instância possui sua própria cópia da propriedade.
instancia1.LOCAL = '192.168.1.1';

console.log(instancia1.LOCAL);
console.log(instancia2.LOCAL);
console.log(instancia3.LOCAL);

console.log(
  '--------------------------------------------------------------------------------------------------------------------------------',
);

//Neste código, estamos definindo uma classe BancoDeDados2 que possui um atributo estático chamado LOCAL. Isso significa que LOCAL pertence à classe em vez de a instâncias individuais. Todas as instâncias criadas a partir dessa classe compartilharão o mesmo valor para LOCAL. Não importa quantas instâncias você crie, todas elas terão LOCAL definido como '127.0.0.1'.

//Se criarmos 10 objetos a partir de uma classe com um atributo statico todas instâncias apontaram para um mesmo endereço de memória, ou seja, é um ponto fixo. Se mudarmos o valor do atributo estamos mudando para todas as instâncias criadas daquela classe.
class ClasseComAtributoEstatico {
  static LOCAL = '127.0.0.1';
}

let instanciaEstatic = new ClasseComAtributoEstatico();
let instanciaEstatic2 = new ClasseComAtributoEstatico();
let instanciaEstatic3 = new ClasseComAtributoEstatico();

instanciaEstatic = ClasseComAtributoEstatico.LOCAL = '125.0.0.1';
instanciaEstatic2 = ClasseComAtributoEstatico.LOCAL;
instanciaEstatic3 = ClasseComAtributoEstatico.LOCAL;

//@ts-ignore
console.log(instanciaEstatic2);
console.log(instanciaEstatic);
console.log(instanciaEstatic3);
