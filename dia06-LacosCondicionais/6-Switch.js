// Importando a biblioteca
const leia = require('readline-sync')

// Variaveis
let cargo
let percentualdoReajuste

// Entrada de dados
nomeDoColaborador = leia.question("Digite o nome do colaborador: ")
codigoDoCargo = leia.questionInt("Digite o código do cargo entre 1 e 6: ")
salario = leia.questionFloat("Digite o salário: R$ ")


switch(codigoDoCargo){
    case 1:
        cargo = "Gerente"
        percentualDoReajuste = 0.10
        break
    case 2:
        cargo = "Vendedor"
        percentualDoReajuste = 0.07
        break
    case 3:
        cargo = "Supervisor"
        percentualDoReajuste = 0.09
        break       
    case 4:
        cargo = "Motorista"
        percentualdoReajuste = 0.06
        break   
    case 5:
        cargo = "Estoquista"
        percentualDoReajuste = 0.05
        break
    case 6:
        cargo = "Técnico de TI"
        percentualDoReajuste = 0.08
        break
    default:
        console.log("Código inválido!")
}

// Processamento e Saida de dados
if (codigoDoCargo >=1 && codigoDoCargo <=6){
    let novoSalario = salario + (percentualDoReajuste * salario)
    console.log("Coladorador:" + nomeDoColaborador)
    console.log("Cargo:" + cargo)
    console.log("Salário: R$" + novoSalario)
}

