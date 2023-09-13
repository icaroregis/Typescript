"use strict";
//Um valor que nunca poderá ser retornado.
function showError(message) {
    throw new Error(message);
}
//console.log(showError("Algo deu errado"));
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
//# sourceMappingURL=never.js.map