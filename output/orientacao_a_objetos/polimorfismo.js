"use strict";
//Polimorfismo => “Qualidade ou estado de ser capaz de assumir diferentesformas.” - Oxford Languages.
// Esse conceito é aplicado quando uma classe filha herda um
// mesmo atributo ou método de sua classe pai, mas
// implementando um novo comportamento ou lógica,
// sobrescrevendo-o.
class Empresa {
    prestarServico() {
        return 'Empresa prestando serviço';
    }
}
class Padaria extends Empresa {
    prestarServico() {
        return 'Vendendo pão';
    }
}
class Mercearia extends Empresa {
    prestarServico() {
        return 'Vendendo alimentos e bebidas';
    }
}
console.log(new Empresa().prestarServico());
console.log(new Padaria().prestarServico());
console.log(new Mercearia().prestarServico());
//# sourceMappingURL=polimorfismo.js.map