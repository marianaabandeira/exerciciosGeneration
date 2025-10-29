// Importando a biblioteca
const leia = require('readline-sync')

// Entradas de dados
let n1 = leia.questionFloat("Digite o primeiro número: ")
let n2 = leia.questionFloat("Digite o segundo número: ")
let n3 = leia.questionFloat("Digite o terceiro número: ")
let n4 = leia.questionFloat("Digite o quarto número: ")

// Processamento
let diferenca = (n1 * n2) - (n3 * n4)

// Saída de dados
console.log("\nDiferença:" + diferenca)
