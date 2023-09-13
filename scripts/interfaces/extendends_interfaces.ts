interface IModelo {
  id: number;
  created_at: number;
  updated_at: number;
}

//extendendo as propriedades de IModelo.
interface IPessoa extends IModelo {
  nome: string;
  idade?: number;
}

//Extendendo as propriedades de IPessoa.
interface IUsuario extends IPessoa {
  email: string;
  senha: string;
}

//No fim IUsuario herda as propriedades de IModelo e IPessoa.
const joao: IUsuario = {
  email: 'joao@hcode.com.br',
  id: 1,
  nome: 'João Rangel',
  senha: '123456',
  created_at: new Date().getTime(),
  updated_at: new Date().getTime(),
};
