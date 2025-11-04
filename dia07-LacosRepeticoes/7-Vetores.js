// Importando a biblioteca
const leia = require('readline-sync')

// Criando o vetor com 10 números inteiros
let numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

// Perguntando ao usuário o número que ele quer procurar
let numeroProcurado = leia.questionInt("Digite o número que você quer encontrar: ")

// Criando uma variável pra saber se o número foi encontrado ou não
let encontrado = false

// Laço de repetição para percorrer o vetor
for (let i = 0; i < numeros.length; i++) { // ou seja, de 0 até 9

    // Se o número da posição i for igual ao que o usuário digitou
    if (numeros[i] === numeroProcurado) { 
        console.log(`O número ${numeroProcurado} está na posição: ${i}`)
        encontrado = true // marca que achou
        break // para o laço, porque já encontrou
    }
}

// Se o número não foi encontrado no vetor
if (!encontrado) {
    console.log("O número não foi encontrado!")
}
