// Importando a biblioteca
const leia = require('readline-sync')

// Entradas de dados
let salarioBruto = leia.questionFloat("Digite o salario: ")
let adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ")
let horasExtras = leia.questionFloat("Digite o valor das horas extras: ")
let descontos = leia.questionFloat("Digite o total de descontos: ")

// Processamento
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

// Saída de dados
console.log("\nSalário Líquido:" + salarioLiquido)