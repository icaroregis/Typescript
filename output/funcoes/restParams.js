"use strict";
function teste(...rest) {
    const array = [...rest];
    return array;
}
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => Number(rendaTotal) + Number(rendaAtual), 0);
}
console.log(somarRenda(250, 780, 695, 2000, 6500));
//# sourceMappingURL=restParams.js.map