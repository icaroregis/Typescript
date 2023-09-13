interface IBancoDeDados {
  ip: string;
  usuario: string;
  senha: string;
  tipoBanco: string;
}

//factory
export class BancoDeDados {
  //Um método estático não precisa ser instanciado.
  //Todas as instâncias compartilham o mesmo valor.
  //Os Atributos estáticos são usados para definir valores padrões para o IP e tipos de banco de dados.
  //Um atributo estático é uma variável que pertence à classe em vez de pertencer a instâncias individuais dessa classe.
  //Ele é compartilhado por todas as instâncias da classe.
  //Você pode acessá-lo diretamente na classe, sem criar uma instância da classe.
  //É útil para armazenar informações compartilhadas por todas as instâncias da classe.

  static LOCAL = '127.0.0.1';
  static TIPO_MYSQL = 'MySQL';
  static TIPO_SQLSERVER = 'SQL Server';

  constructor(
    private ip: string,
    private usuario: string,
    private senha: string,
    private tipoBanco: string,
  ) {}

  static factory(parametros: IBancoDeDados) {
    if (
      //Não se usa o this na chamada de métodos estáticos
      ![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_SQLSERVER].includes(
        parametros.tipoBanco,
      )
    ) {
      throw new Error('Tipo de banco incorreto');
    }

    return new BancoDeDados(
      parametros.ip,
      parametros.usuario,
      parametros.senha,
      parametros.tipoBanco,
    );
  }
}
