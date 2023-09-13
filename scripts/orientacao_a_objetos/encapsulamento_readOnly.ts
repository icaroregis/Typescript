// Atributos com readonly protegem alterações, mas permitem
// que sejam vistos e lidos.
// Podemos dizer que esse modificador de acesso exclusivo
// para atributos é como um banheiro em uma loja que vende
// banheiros.
class Usuario {
  readonly id: string = '123123sdad232';
  public nome: string = 'Joao';
  private senha: string = '123456';
  readonly dataCadastro: Date = new Date('2021-01-01');
}

const usuario = new Usuario();

console.log(usuario.id);
// usuario.id = "123";
//console.log(usuario.senha);
