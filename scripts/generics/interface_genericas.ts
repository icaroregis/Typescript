interface IProcessamento<T> {
  valor: T;
  realizarProcessamento(arg: T): T;
}

const texto: IProcessamento<string> = {
  valor: 'hcode',
  realizarProcessamento(argumento: string): string {
    return argumento.toUpperCase();
  },
};

console.log(texto.valor);
console.log(texto.realizarProcessamento('hcode treinamentos'));

const numero: IProcessamento<number> = {
  valor: 10,
  realizarProcessamento(v: number): number {
    return v * v;
  },
};

console.log(numero.realizarProcessamento(numero.valor));
