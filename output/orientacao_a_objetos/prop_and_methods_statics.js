"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BancoDeDados_1 = require("./classes/BancoDeDados");
const conexaoBanco = BancoDeDados_1.BancoDeDados.factory({
    tipoBanco: BancoDeDados_1.BancoDeDados.TIPO_MYSQL,
    senha: 'root',
    usuario: 'root',
    ip: BancoDeDados_1.BancoDeDados.LOCAL,
});
console.log(conexaoBanco);
//# sourceMappingURL=prop_and_methods_statics.js.map