// Importando a biblioteca
const leia = require('readline-sync')

// Variáveis
let saldo = 1000.00

// Entrada de dados
operacao = leia.question("Digite o código da aperação entre 1 e 3: ")

// Processamento e Saída de dados
switch(operacao){
    case "1":
        console.log("Operação - Saldo")
        console.log("Seu saldo é R$ " + saldo)
        break
    case "2":
        console.log("Operação - Saque")
            let saque = leia.questionFloat("Digite o valor do saque: R$ ")
            if (saque > saldo) {
                console.log("Saldo insuficiente!")
            } else {
                saldo = saldo - saque
                console.log("Saque realizado com sucesso! Seu novo saldo é de R$ :" + saldo)
            }
        break
    case "3":
        console.log("Operação - Depósito")
        let deposito= leia.questionFloat("Digite o valor do depósito: R$ ")
        saldo = saldo + deposito
        console.log("Deposito realizado com sucesso! Seu novo saldo é de R$: " + saldo)
        break
    default:
        console.log("Operação invalidade!")
        }
