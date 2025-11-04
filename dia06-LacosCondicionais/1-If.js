// Importando a biblioteca
const leia = require('readline-sync')

// Entradam de dados
nA = leia.questionInt("Digite o numero A: ")
nB = leia.questionInt("Digite o numero B: ")
nC = leia.questionInt("Digite o numero C: ")

// Processamento e Saida de dados
if (nA+nB>nC){
    console.log("A soma de A + B é maior que C")
}if (nA+nB===nC){
    console.log("A soma de A + B é igual a C")
}if (nA+nB<nC){
    console.log("A soma de A + B é menor que C")
}

