"use strict";
//definindo valores padrões em typescript. Example: assunto: string = 'Sem assunto'
function enviarEmail(para, assunto = 'Sem assunto', remetente) {
    console.log({
        para,
        assunto,
        remetente,
    });
}
enviarEmail('joao@hcode.com.br');
//# sourceMappingURL=valores_padroes.js.map