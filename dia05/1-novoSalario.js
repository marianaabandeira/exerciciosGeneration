// Importando a biblioteca
const leia = require('readline-sync')

// Entradas de dados
let salario = leia.questionFloat("Digite o salario: ")
let abono = leia.questionFloat("Digite o abono: ")

// Processamento
let novoSalario = salario + abono

// Saída de dados
console.log("\nNovo salario:" + novoSalario)