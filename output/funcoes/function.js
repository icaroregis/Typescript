"use strict";
function mostrarMensagem(texto) {
    console.log(texto);
    if (typeof texto === 'string') {
        return true;
    }
    return false;
}
console.log(mostrarMensagem('Hcode'));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem({ url: 'https://hcode.com.br' }));
const show = (codigo) => {
    return new Date();
};
//# sourceMappingURL=function.js.map