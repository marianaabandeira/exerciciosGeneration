// Importando a biblioteca
const leia = require('readline-sync')

// Entrada de dados 
let nota1 = leia.questionFloat("Digite a primeira nota: ")
let nota2 = leia.questionFloat("Digite a segunda nota: ")
let nota3 = leia.questionFloat("Digite a terceira nota: ")
let nota4 = leia.questionFloat("Digite a quarta nota: ")

// Processamento
let media = (nota1 + nota2 + nota3 + nota4) / 4

// Saída de dados
console.log("\nMédia final:" + media)
