let resultado: unknown;

resultado = {
  sucesso: true,
};

resultado = 'Sucesso ao enviar o formulário';
resultado = 200;

const information: any = 150;
const informationUnknown: unknown = 500;

//Não podemos definir a valor de uma variável unknown para outra variável com tipo diferente de unknown.
const firstNumber: number = information;
// const secondNumber: number = informationUnknown;
