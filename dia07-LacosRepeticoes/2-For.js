// Importando a biblioteca
const leia = require('readline-sync')

// Declarando as variáveis
let numero, contador, pares, impares // Ou seja, número digitado, contador do laço, contagem de pares e contagem de ímpares

// Começando as contagens em 0
pares = 0 // Contador de números pares
impares = 0 // Contador de números ímpares

// Criando o laço de repetição
for (contador =1; contador <= 10; contador++) { // Ou seja, vai repetir 10 vezes
    // Solicitando o número ao usuário
    numero = leia.questionInt("Digite o " + contador + "º número: ") // Ou seja, 1º, 2º, 3º, ..., 10º
    // Verificando se o número é par ou ímpar
   if (numero % 2 === 0) {  // Se o resto da divisão por 2 for igual a 0, é par
    pares = pares + 1  // Incrementa a contagem de pares
    } else {  // Senão, é ímpar 
    impares = impares + 1  // Incrementa a contagem de ímpares
    }

}

   // Mostrando o resultado final
   // Exibindo a contagem de pares e ímpares
   console.log("Total de números pares: " + pares)
   console.log("Total de números ímpares: " + impares)