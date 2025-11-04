"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync"); // Biblioteca para ler input do usuário
// Cria a Collection Set do tipo number e inicializa com 10 valores
var setNumeros = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("\nNúmeros cadastrados: ");
for (var _i = 0, setNumeros_1 = setNumeros; _i < setNumeros_1.length; _i++) {
    var numero = setNumeros_1[_i];
    console.log(numero);
}
// Solicita ao usuário um número
var numeroUsuario = readlineSync.questionInt("\nDigite o número que você deseja encontrar: ");
// Verifica se o número está na Collection Set
if (setNumeros.has(numeroUsuario)) {
    console.log("\nO n\u00FAmero ".concat(numeroUsuario, " foi encontrado!"));
}
else {
    console.log("\nO n\u00FAmero ".concat(numeroUsuario, " n\u00E3o foi encontrado!"));
}
