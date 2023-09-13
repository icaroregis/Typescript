"use strict";
const texto = {
    valor: 'hcode',
    realizarProcessamento(argumento) {
        return argumento.toUpperCase();
    },
};
console.log(texto.valor);
console.log(texto.realizarProcessamento('hcode treinamentos'));
const numero = {
    valor: 10,
    realizarProcessamento(v) {
        return v * v;
    },
};
console.log(numero.realizarProcessamento(numero.valor));
//# sourceMappingURL=interface_genericas.js.map