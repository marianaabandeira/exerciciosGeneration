"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync"); // Biblioteca para ler input do usuário
// 1️⃣ Cria um array vazio para guardar as cores
var cores = [];
// 2️⃣ Solicita ao usuário que digite 5 cores
for (var i = 0; i < 5; i++) {
    var cor = readlineSync.question("Digite a ".concat(i + 1, "\u00AA cor: "));
    cores.push(cor); // Adiciona a cor digitada ao array
}
// 3️⃣ Mostra todas as cores adicionadas
console.log("\nListar todas as cores:");
for (var _i = 0, cores_1 = cores; _i < cores_1.length; _i++) {
    var cor = cores_1[_i];
    console.log(cor);
}
// 4️⃣ Mostra todas as cores em ordem crescente
var coresOrdenadas = __spreadArray([], cores, true); // Cria uma cópia do array para não alterar o original
coresOrdenadas.sort(); // Ordena em ordem alfabética
console.log("\nOrdenar as cores:");
for (var _a = 0, coresOrdenadas_1 = coresOrdenadas; _a < coresOrdenadas_1.length; _a++) {
    var cor = coresOrdenadas_1[_a];
    console.log(cor);
}
