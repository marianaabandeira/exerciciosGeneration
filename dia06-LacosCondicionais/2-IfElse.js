// Importando a biblioteca
const leia = require('readline-sync')

// Entrada  de dados
numero = leia.questionInt("Digite um numero inteiro: ")

// Processamento e Saida de dados    
if (numero > 0 && numero % 2 === 0){
    console.log("O número " + numero + " é par e positivo!")
} else if (numero > 0 && numero % 2 !== 0){
    console.log("O número " + numero + " é ímpar e positivo!")
} else if (numero < 0 && numero % 2 === 0){
    console.log("O número " + numero + " é par e negativo!")
} else if (numero < 0 && numero % 2 !== 0){
    console.log("O número " + numero + " é ímpar e negativo!")
} 

