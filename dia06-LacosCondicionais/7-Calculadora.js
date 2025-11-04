// Importando a biblioteca
const leia = require('readline-sync')

// Variáveis
let codigo
let operacao

// Entrada de dados
n1 = leia.questionFloat("Digite o primeiro número: ")
n2 = leia.questionFloat("Digite o segundo número: ")
console.log("Escolha a operação que deseja realizar:")

// Menu de operações
console.log("1 - Adição (+)")
console.log("2 - Subtração (-)")
console.log("3 - Multiplicação (*)")
console.log("4 - Divisão (/)")

codigo = leia.questionInt("Digite o código da operação entre 1 e 4 : ")

switch(codigo){
    case 1:
        operacao = "+" // Adição
        resultado = n1 + n2
        break
    case 2: 
        operação = "-" // Subtração
        resultado = n1 - n2
        break   
    case 3:
        operacao = "*" // Multiplicação
        resultado = n1 * n2
        break   
    case 4:
        operacao = "/" // Divisão
        resultado = n1 / n2
        break
    default:
        console.log("Código inválido!")

}

// Processamento e Saida de dados
if (codigo >=1 && codigo <=4){
    console.log("Resultado: " +n1 +" " + operacao + " " + n2 + " = " + resultado)

}