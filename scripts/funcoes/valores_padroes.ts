//definindo valores padrões em typescript. Example: assunto: string = 'Sem assunto'

function enviarEmail(
  para: string,
  assunto: string = 'Sem assunto',
  remetente?: string,
): void {
  console.log({
    para,
    assunto,
    remetente,
  });
}

enviarEmail('joao@hcode.com.br');
