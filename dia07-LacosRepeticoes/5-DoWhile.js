// Importando a biblioteca
const leia = require('readline-sync')

// Declarando as variáveis
let numero // guarda cada número digitado pelo usuário
let soma = 0 // acumula a soma dos números positivos

// Criando o laço de repetição
do { 
  
    numero = leia.questionInt("Digite um número: ") // Solicitando o número ao usuário

    if (numero > 0) { // Se o número for positivo
    soma = soma + numero // Adiciona o número à soma
    }

} while (numero !== 0) // Enquanto o número for diferente de zero, o laço continua

// Mostrando a saída
console.log("A soma dos números positivos é: " + soma)  

