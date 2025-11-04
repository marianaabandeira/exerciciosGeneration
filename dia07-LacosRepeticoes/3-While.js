// Importando a biblioteca
const leia = require('readline-sync')

// Declarando as variáveis e contole do laço
let continua = true // Variável de controle do laço, ou seja, enquanto for true, o laço continua
let menores21 = 0 // Contador de pessoas menores de 21 anos
let maiores50 = 0 // Contador de pessoas maiores de 50 anos

// Criando o laço de repetição
while (continua) {  // Enquanto continua for true, o laço continua
    // Solicitando o número ao usuário
    let idade = leia.questionInt("Digite uma idade: ")
    // Verificando se o número é válido
    if (idade <0) { // ou seja, se a idade for negativa
        break // Sai do laço se a idade for negativa
    }

// Processando as idades
// Verificando se a idade é menor que 21 ou maior que 50
if (idade < 21) { // Se for menor que 21
    menores21 = menores21 + 1 // ou menores21++, ou seja, incrementa a contagem de menores de 21 anos
    }
if (idade > 50) { // Se for maior que 50
    maiores50 = maiores50 + 1 // ou maiores50++, ou seja, incrementa a contagem de maiores de 50 anos
    }

}

// Mostrando o resultado final
// Exibindo a contagem de menores de 21 anos e maiores de 50 anos
console.log("Total de pessoas menores de 21 anos: " + menores21)
console.log("Total de pessoas maiores de 50 anos: " + maiores50)

